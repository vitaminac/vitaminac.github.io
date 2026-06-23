import os
import subprocess
import zlib

import tinyaes

from pyimod00_crypto_key import key

CIPHER_BLOCK_SIZE = 16
CIPHER_KEY = bytes(key, 'utf-8')
PYC_HEADER = b"\x42\x0D\x0D\x0A\x00\x00\x00\x00\x70\x79\x69\x30\x10\x01\x00\x00"
ENCRYPTED_FILENAME_SUFFIX = ".pyc.encrypted"
PYC_FILENAME_SUFFIX = ".pyc"


def encrypted_to_pyc(input_path, output_path):
    with open(input_path, "rb") as encrypted_pyc:
        with open(output_path, "wb") as pyc:
            cipher_iv = encrypted_pyc.read(CIPHER_BLOCK_SIZE)
            encrypted_data = encrypted_pyc.read()
            cipher = tinyaes.AES(CIPHER_KEY, cipher_iv)
            decrypted_data = cipher.CTR_xcrypt_buffer(encrypted_data)
            plaintext = zlib.decompress(decrypted_data)
            pyc.write(PYC_HEADER)
            pyc.write(plaintext)
    print(f"decrypt {input_path} and save result to {output_path}")


def pyc_to_py_with_uncompyle6(input_path):
    try:
        return subprocess.call(["uncompyle6", "-o", os.path.dirname(input_path), input_path], timeout=30)
    except:
        return -1


def pyc_to_py_with_decompile3(input_path):
    try:
        return subprocess.call(["decompyle3", "-o", os.path.dirname(input_path), input_path], timeout=30)
    except:
        pass
    # fallback to uncompyle6
    return pyc_to_py_with_uncompyle6(input_path)


def main():
    for root, dirs, files in os.walk(".", topdown=False):
        for filename in files:
            filepath = os.path.join(root, filename)
            if filename.endswith(".pyc.encrypted"):
                pyc_filepath = filepath[:-len(ENCRYPTED_FILENAME_SUFFIX)] + PYC_FILENAME_SUFFIX
                encrypted_to_pyc(filepath, pyc_filepath)
    failed_list = []
    for root, dirs, files in os.walk(".", topdown=False):
        for filename in files:
            filepath = os.path.join(root, filename)
            if filename.endswith(PYC_FILENAME_SUFFIX):
                if pyc_to_py_with_decompile3(filepath) != 0:
                    failed_list.append(filepath)
    print(failed_list)


if __name__ == '__main__':
    main()

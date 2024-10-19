#include <Windows.h>

DWORD WINAPI ThreadProc( // For more information, see https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/ms686736(v=vs.85)
    IN LPVOID lpParam    // The thread data passed to the function using the lpParameter parameter of the CreateThread, CreateRemoteThread, or CreateRemoteThreadEx function.
)
{
    // do anything you need here
}

BOOL WINAPI DllMain(                       // For more information, see https://docs.microsoft.com/en-us/windows/win32/dlls/dllmain and https://docs.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-entry-point-function
    IN HINSTANCE pHandleToInstanceThisDLL, // A handle to the DLL module. The value is the base address of the DLL. The HINSTANCE of a DLL is the same as the HMODULE of the DLL, so hinstDLL can be used in calls to functions that require a module handle.
    IN DWORD fdwReason,                    // The reason code that indicates why the DLL entry-point function is being called.
    IN LPVOID lpReserved                   // If fdwReason is DLL_PROCESS_ATTACH, lpvReserved is NULL for dynamic loads and non-NULL for static loads. If fdwReason is DLL_PROCESS_DETACH, lpvReserved is NULL if FreeLibrary has been called or the DLL load failed and non-NULL if the process is terminating.
)
{
    static HINSTANCE HandleToInstanceThisDLL = NULL;
    HANDLE HandleForThreadProc = NULL;
    DWORD ThreadProcId = 0;
    // Perform actions based on the reason for calling.
    switch (fdwReason)
    {
    case DLL_PROCESS_ATTACH:
        // The DLL is being loaded into the virtual address space of the current process as a result of the process starting up or as a result of a call to LoadLibrary. DLLs can use this opportunity to initialize any instance data or to use the TlsAlloc function to allocate a thread local storage (TLS) index. The lpReserved parameter indicates whether the DLL is being loaded statically or dynamically.
        HandleToInstanceThisDLL = pHandleToInstanceThisDLL;
        HandleForThreadProc = CreateThread( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/processthreadsapi/nf-processthreadsapi-createthread and https://docs.microsoft.com/en-us/windows/win32/procthread/creating-threads
            NULL,                           // lpThreadAttributes: A pointer to a SECURITY_ATTRIBUTES structure that determines whether the returned handle can be inherited by child processes. If lpThreadAttributes is NULL, the handle cannot be inherited.
            0,                              // dwStackSize: The initial size of the stack, in bytes. The system rounds this value to the nearest page. If this parameter is zero, the new thread uses the default size for the executable.
            ThreadProc,                     // lpStartAddress: A pointer to the application-defined function to be executed by the thread. This pointer represents the starting address of the thread.
            &HandleToInstanceThisDLL,       // lpParameter: A pointer to a variable to be passed to the thread
            0,                              // dwCreationFlags: The flags that control the creation of the thread. 0 means the thread runs immediately after creation.
            &ThreadProcId                   // lpThreadId: A pointer to a variable that receives the thread identifier. If this parameter is NULL, the thread identifier is not returned.
        );
        break;

    case DLL_THREAD_ATTACH:
        // The current process is creating a new thread. When this occurs, the system calls the entry-point function of all DLLs currently attached to the process. The call is made in the context of the new thread. DLLs can use this opportunity to initialize a TLS slot for the thread. A thread calling the DLL entry-point function with DLL_PROCESS_ATTACH does not call the DLL entry-point function with DLL_THREAD_ATTACH. Note that a DLL's entry-point function is called with this value only by threads created after the DLL is loaded by the process. When a DLL is loaded using LoadLibrary, existing threads do not call the entry-point function of the newly loaded DLL.
        break;

    case DLL_THREAD_DETACH:
        // A thread is exiting cleanly. If the DLL has stored a pointer to allocated memory in a TLS slot, it should use this opportunity to free the memory. The system calls the entry-point function of all currently loaded DLLs with this value. The call is made in the context of the exiting thread.
        break;

    case DLL_PROCESS_DETACH:
        // The DLL is being unloaded from the virtual address space of the calling process because it was loaded unsuccessfully or the reference count has reached zero (the processes has either terminated or called FreeLibrary one time for each time it called LoadLibrary). The lpReserved parameter indicates whether the DLL is being unloaded as a result of a FreeLibrary call, a failure to load, or process termination. The DLL can use this opportunity to call the TlsFree function to free any TLS indices allocated by using TlsAlloc and to free any thread local data. Note that the thread that receives the DLL_PROCESS_DETACH notification is not necessarily the same thread that received the DLL_PROCESS_ATTACH notification.
        break;
    }
    return TRUE; // Successful DLL_PROCESS_ATTACH.
}

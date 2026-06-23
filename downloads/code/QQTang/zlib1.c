#include <Windows.h>

HWND FindHandleToQQTangWindow()
{
    HWND HandleToQQTangWindow = NULL;
    for (int i = 0; HandleToQQTangWindow == NULL && i < 60; i++)
    {
        Sleep(1000);
        HandleToQQTangWindow = FindWindowW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-findwindoww
            L"QQTangWinClass",              // lpClassName: The class name or a class atom created by a previous call to the RegisterClass or RegisterClassEx function. The atom must be in the low-order word of lpClassName; the high-order word must be zero. If lpClassName points to a string, it specifies the window class name. The class name can be any name registered with RegisterClass or RegisterClassEx, or any of the predefined control-class names. If lpClassName is NULL, it finds any window whose title matches the lpWindowName parameter.
            L"QQ堂 5.2 Beta1 Build1 "       // lpWindowName: The window name (the window's title). If this parameter is NULL, all window names match.
        );
    }
    return HandleToQQTangWindow;
}

void GetQQTangCheatWindowScreenCoordinates(IN const HWND HandleToParentWindow, OUT LPPOINT PointerToQQTangCheatWindowScreenCoordinates)
{
    PointerToQQTangCheatWindowScreenCoordinates->x = -200;
    PointerToQQTangCheatWindowScreenCoordinates->y = 0;
    MapWindowPoints(                                 // // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-mapwindowpoints
        HandleToParentWindow,                        // hWndFrom: A handle to the window from which points are converted. If this parameter is NULL or HWND_DESKTOP, the points are presumed to be in screen coordinates.
        HWND_DESKTOP,                                // hWndTo: A handle to the window to which points are converted. If this parameter is NULL or HWND_DESKTOP, the points are converted to screen coordinates.
        PointerToQQTangCheatWindowScreenCoordinates, // lpPoints: A pointer to an array of POINT structures that contain the set of points to be converted. The points are in device units. This parameter can also point to a RECT structure, in which case the cPoints parameter should be set to 2.
        1                                            // cPoints: The number of POINT structures in the array pointed to by the lpPoints parameter.
    );
}

LRESULT CALLBACK MainUIWindowProc( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nc-winuser-wndproc and https://docs.microsoft.com/en-us/windows/win32/winmsg/window-procedures.
    IN HWND hWnd,                  // A handle to the window. This parameter is typically named hWnd.
    IN UINT uMsg,                  // The message. This parameter is typically named uMsg. For lists of the system-provided messages, see System-defined messages https://docs.microsoft.com/en-us/windows/win32/winmsg/about-messages-and-message-queues#system-defined-messages.
    IN WPARAM wParam,              // Additional message information. This parameter is typically named wParam. The contents of the wParam parameter depend on the value of the uMsg parameter.
    IN LPARAM lParam               // Additional message information. This parameter is typically named lParam. The contents of the lParam parameter depend on the value of the uMsg parameter.
)
{
    static const LPCWSTR GREETING_MESSAGE = L"QQ堂助手已成功启动";
    PAINTSTRUCT ps; // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-paintstruct
    HDC hdc;
    switch (uMsg)
    {
    case WM_PAINT:        // The application receives the WM_PAINT message when part of its displayed window must be updated. The event can occur when a user moves a window in front of your window, then moves it away again. Your application doesn't know when these events occur. Only Windows knows, so it notifies your app with a WM_PAINT message. When the window is first displayed, all of it must be updated. To handle a WM_PAINT message, first call BeginPaint, then handle all the logic to lay out the text, buttons, and other controls in the window, and then call EndPaint. HDC in the code is a handle to a device context, which is used to draw in the window's client area. Use the BeginPaint and EndPaint functions to prepare for and complete the drawing in the client area. BeginPaint returns a handle to the display device context used for drawing in the client area; EndPaint ends the paint request and releases the device context.
        hdc = BeginPaint( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-beginpaint
            hWnd,         // hWnd: Handle to the window to be repainted.
            &ps           // lpPaint: Pointer to the PAINTSTRUCT structure that will receive painting information.
        );
        TextOutW(                      // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/wingdi/nf-wingdi-textoutw
            hdc,                       // hdc: A handle to the device context.
            5,                         //  x: The x-coordinate, in logical coordinates, of the reference point that the system uses to align the string.
            5,                         // y: The y-coordinate, in logical coordinates, of the reference point that the system uses to align the string.
            GREETING_MESSAGE,          // lpString: A pointer to the string to be drawn. The string does not need to be zero-terminated, because cchString specifies the length of the string.
            lstrlenW(GREETING_MESSAGE) // c: The length of the string pointed to by lpString, in characters.
        );
        EndPaint( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-endpaint
            hWnd, // hWnd: Handle to the window that has been repainted.
            &ps   // lpPaint: Pointer to a PAINTSTRUCT structure that contains the painting information retrieved by BeginPaint.
        );
        break;
    case WM_DESTROY:     // The application receives the WM_DESTROY message when the window is closed. We use PostQuitMessage to indicate to the system that a thread has made a request to terminate (quit).
        PostQuitMessage( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-postquitmessage
            0            // nExitCode: The application exit code. This value is used as the wParam parameter of the WM_QUIT message.
        );
        break;
    default:                   // An application typically handles many other messages, we calls the default window procedure to provide default processing for any window messages that an application does not process. This function ensures that every message is processed.
        return DefWindowProcW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-defwindowprocw
            hWnd,              // hWnd: A handle to the window procedure that received the message.
            uMsg,              // uMsg: The message.
            wParam,            // wParam: Additional message information. The content of this parameter depends on the value of the Msg parameter.
            lParam             // lParam: Additional message information. The content of this parameter depends on the value of the Msg parameter.
        );
    }
    return 0;
}

DWORD ShowQQTangCheatWindow(const HINSTANCE HandleToInstanceWindowOwner, const HWND HandleToParentWindow)
{
    // For more information of how to write a traditional Windows Desktop application, see https://docs.microsoft.com/en-us/cpp/windows/walkthrough-creating-windows-desktop-applications-cpp?view=msvc-170 and https://docs.microsoft.com/en-us/windows/win32/learnwin32/creating-a-window

    static const LPCWSTR MainUIWindowClassName = L"MyQQTangCheatWindowClass";
    static const int QQTangCheatWindowWidht = 200;
    static const int QQTangCheatWindowHeight = 600;

    WNDCLASSEXW MainUIWindowClass; // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-wndclassexw

    HICON MainUIWindowClassAppIcon = LoadIconW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadiconw
        NULL,                                   // hInstance: A handle to an instance of the module whose executable file contains the icon to be loaded. This parameter must be NULL when a standard icon is being loaded.
        (LPCWSTR)IDI_APPLICATION                // lpIconName: The name of the icon resource to be loaded. Alternatively, this parameter can contain the resource identifier in the low-order word and zero in the high-order word. Use the https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-makeintresourcea macro to create this value. To use one of the predefined icons, set the hInstance parameter to NULL.
    );
    HCURSOR MainUIWindowClassAppCursor = LoadCursorW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadcursorw
        NULL,                                         // hInstance: A handle to an instance of the module whose executable file contains the cursor to be loaded.
        (LPCWSTR)IDC_ARROW                            // lpCursorName: The name of the cursor resource to be loaded. Alternatively, this parameter can consist of the resource identifier in the low-order word and zero in the high-order word. The MAKEINTRESOURCE macro can also be used to create this value. To use one of the predefined cursors, the application must set the hInstance parameter to NULL
    );

    // 1. You populate a structure of type WNDCLASSEX. The structure contains information about the window: the application icon, the background color of the window, the name to display in the title bar, among other things. Importantly, it contains a function pointer to your window procedure.
    MainUIWindowClass.cbSize = sizeof(WNDCLASSEX);                  // The size, in bytes, of this structure. Set this member to sizeof(WNDCLASSEX). Be sure to set this member before calling the GetClassInfoEx function.
    MainUIWindowClass.style = CS_DBLCLKS | CS_HREDRAW | CS_VREDRAW; // The class style(s). This member can be any combination of the Class Styles. For a list of possible values, see https://docs.microsoft.com/en-us/windows/win32/winmsg/window-class-styles
    MainUIWindowClass.lpfnWndProc = MainUIWindowProc;               // A pointer to the window procedure. You must use the CallWindowProc function to call the window procedure.
    MainUIWindowClass.cbClsExtra = 0;                               // The number of extra bytes to allocate following the window-class structure. The system initializes the bytes to zero.
    MainUIWindowClass.cbWndExtra = 0;                               // The number of extra bytes to allocate following the window instance. The system initializes the bytes to zero. If an application uses WNDCLASSEX to register a dialog box created by using the CLASS directive in the resource file, it must set this member to DLGWINDOWEXTRA.
    MainUIWindowClass.hInstance = HandleToInstanceWindowOwner;      // A handle to the instance that contains the window procedure for the class.
    MainUIWindowClass.hIcon = MainUIWindowClassAppIcon;             // A handle to the class icon. This member must be a handle to an icon resource. If this member is NULL, the system provides a default icon.
    MainUIWindowClass.hCursor = MainUIWindowClassAppCursor;         // A handle to the class cursor. This member must be a handle to a cursor resource. If this member is NULL, an application must explicitly set the cursor shape whenever the mouse moves into the application's window. For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-loadcursorw
    MainUIWindowClass.hbrBackground = (HBRUSH)COLOR_BACKGROUND;     // A handle to the class background brush. This member can be a handle to the brush to be used for painting the background, or it can be a color value. A color value must be one of the following standard system colors (the value 1 must be added to the chosen color).
    MainUIWindowClass.lpszMenuName = NULL;                          // Pointer to a null-terminated character string that specifies the resource name of the class menu, as the name appears in the resource file. If you use an integer to identify the menu, use the MAKEINTRESOURCE macro. If this member is NULL, windows belonging to this class have no default menu.
    MainUIWindowClass.lpszClassName = MainUIWindowClassName;        // A pointer to a null-terminated string or is an atom. If this parameter is an atom, it must be a class atom created by a previous call to the RegisterClass or RegisterClassEx function. The atom must be in the low-order word of lpszClassName; the high-order word must be zero. If lpszClassName is a string, it specifies the window class name. The class name can be any name registered with RegisterClass or RegisterClassEx, or any of the predefined control-class names. The maximum length for lpszClassName is 256. If lpszClassName is greater than the maximum length, the RegisterClassEx function will fail.
    MainUIWindowClass.hIconSm = MainUIWindowClassAppIcon;           // A handle to a small icon that is associated with the window class. If this member is NULL, the system searches the icon resource specified by the hIcon member for an icon of the appropriate size to use as the small icon.

    // 2. Register the WNDCLASSEX with Windows so that it knows about your window and how to send messages to it. Use the RegisterClassEx function and pass the window class structure as an argument.
    const ATOM MainUIWindowAtom = RegisterClassExW(&MainUIWindowClass); // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-registerclassexw

    // 3. You then create a window with relative position to parent window
    POINT QQTangCheatWindowScreenCoordinates;
    GetQQTangCheatWindowScreenCoordinates(HandleToParentWindow, &QQTangCheatWindowScreenCoordinates);
    const HWND HandleToMainUIWindow = CreateWindowExW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-createwindowexw
        WS_EX_LEFT,                                    // dwExStyle: The extended window style of the window being created. For a list of possible values, see https://docs.microsoft.com/en-us/windows/win32/winmsg/extended-window-styles
        MainUIWindowClassName,                         // lpClassName: A null-terminated string or a class atom created by a previous call to the RegisterClass or RegisterClassEx function. The atom must be in the low-order word of lpClassName; the high-order word must be zero. If lpClassName is a string, it specifies the window class name. The class name can be any name registered with RegisterClass or RegisterClassEx, provided that the module that registers the class is also the module that creates the window. The class name can also be any of the predefined system class names.
        L"QQ堂游戏助手",                               // lpWindowName: The window name. If the window style specifies a title bar, the window title pointed to by lpWindowName is displayed in the title bar. When using CreateWindow to create controls, such as buttons, check boxes, and static controls, use lpWindowName to specify the text of the control. When creating a static control with the SS_ICON style, use lpWindowName to specify the icon name or identifier. To specify an identifier, use the syntax "#num".
        WS_POPUP | WS_CAPTION,                         // dwStyle: The style of the window being created. This parameter can be a combination of the window style values, plus the control styles indicated in the Remarks section. For a list of possible values, see https://docs.microsoft.com/en-us/windows/win32/winmsg/window-styles. For more information, see https://docs.microsoft.com/en-us/windows/win32/winmsg/window-features.
        QQTangCheatWindowScreenCoordinates.x,          // X: The initial horizontal position of the window. For an overlapped or pop-up window, the x parameter is the initial x-coordinate of the window's upper-left corner, in screen coordinates. For a child window, x is the x-coordinate of the upper-left corner of the window relative to the upper-left corner of the parent window's client area. If x is set to CW_USEDEFAULT, the system selects the default position for the window's upper-left corner and ignores the y parameter. CW_USEDEFAULT is valid only for overlapped windows; if it is specified for a pop-up or child window, the x and y parameters are set to zero.
        QQTangCheatWindowScreenCoordinates.y,          // Y: The initial vertical position of the window. For an overlapped or pop-up window, the y parameter is the initial y-coordinate of the window's upper-left corner, in screen coordinates. For a child window, y is the initial y-coordinate of the upper-left corner of the child window relative to the upper-left corner of the parent window's client area. For a list box y is the initial y-coordinate of the upper-left corner of the list box's client area relative to the upper-left corner of the parent window's client area. If an overlapped window is created with the WS_VISIBLE style bit set and the x parameter is set to CW_USEDEFAULT, then the y parameter determines how the window is shown. If the y parameter is CW_USEDEFAULT, then the window manager calls ShowWindow with the SW_SHOW flag after the window has been created. If the y parameter is some other value, then the window manager calls ShowWindow with that value as the nCmdShow parameter.
        QQTangCheatWindowWidht,                        // nWidth: The width, in device units, of the window. For overlapped windows, nWidth is the window's width, in screen coordinates, or CW_USEDEFAULT. If nWidth is CW_USEDEFAULT, the system selects a default width and height for the window; the default width extends from the initial x-coordinates to the right edge of the screen; the default height extends from the initial y-coordinate to the top of the icon area. CW_USEDEFAULT is valid only for overlapped windows; if CW_USEDEFAULT is specified for a pop-up or child window, the nWidth and nHeight parameter are set to zero.
        QQTangCheatWindowHeight,                       // nHeight: The height, in device units, of the window. For overlapped windows, nHeight is the window's height, in screen coordinates. If the nWidth parameter is set to CW_USEDEFAULT, the system ignores nHeight.
        HandleToParentWindow,                          // hWndParent: A handle to the parent or owner window of the window being created. To create a child window or an owned window, supply a valid window handle. This parameter is optional for pop-up windows. To create a message-only window, supply HWND_MESSAGE or a handle to an existing message-only window.
        NULL,                                          // hMenu: A handle to a menu, or specifies a child-window identifier, depending on the window style. For an overlapped or pop-up window, hMenu identifies the menu to be used with the window; it can be NULL if the class menu is to be used. For a child window, hMenu specifies the child-window identifier, an integer value used by a dialog box control to notify its parent about events. The application determines the child-window identifier; it must be unique for all child windows with the same parent window.
        HandleToInstanceWindowOwner,                   // hInstance: A handle to the instance of the module to be associated with the window.
        NULL                                           // lpParam: Pointer to a value to be passed to the window through the CREATESTRUCT structure (lpCreateParams member) pointed to by the lParam param of the WM_CREATE message. This message is sent to the created window by this function before it returns. If an application calls CreateWindow to create a MDI client window, lpParam should point to a CLIENTCREATESTRUCT structure. If an MDI client window calls CreateWindow to create an MDI child window, lpParam should point to a MDICREATESTRUCT structure. lpParam may be NULL if no additional data is needed.
    );

    // 4. At this point, the window has been created, but we still need to tell Windows to make it visible.
    ShowWindow(               // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-showwindow
        HandleToMainUIWindow, // hWnd: A handle to the window.
        SW_SHOWNORMAL         // nCmdShow: Controls how the window is to be shown. This parameter is ignored the first time an application calls ShowWindow, if the program that launched the application provides a STARTUPINFO structure. Otherwise, the first time ShowWindow is called, the value should be the value obtained by the WinMain function in its nCmdShow parameter. In subsequent calls, this parameter can be one of the following values.
    );
    UpdateWindow(HandleToMainUIWindow); // The UpdateWindow function updates the client area of the specified window by sending a WM_PAINT message to the window if the window's update region is not empty. The function sends a WM_PAINT message directly to the window procedure of the specified window, bypassing the application queue. If the update region is empty, no message is sent. For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-updatewindow

    // 5. The displayed window isn't yet handling the messages that Windows is now sending to it. To handle the messages, we first add a message loop to listen for the messages that Windows sends. When the application receives a message, this loop dispatches it to your WndProc function to be handled. The message loop resembles the following code.
    MSG msg;
    while (
        GetMessageW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-getmessagew
            &msg,    // lpMsg: A pointer to an MSG structure that receives message information from the thread's message queue. For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/ns-winuser-msg
            NULL,    // hWnd: A handle to the window whose messages are to be retrieved. The window must belong to the current thread. If hWnd is NULL, GetMessage retrieves messages for any window that belongs to the current thread, and any messages on the current thread's message queue whose hwnd value is NULL (see the MSG structure). Therefore if hWnd is NULL, both window messages and thread messages are processed. If hWnd is -1, GetMessage retrieves only messages on the current thread's message queue whose hwnd value is NULL, that is, thread messages as posted by PostMessage (when the hWnd parameter is NULL) or PostThreadMessage.
            0,       // wMsgFilterMin: The integer value of the lowest message value to be retrieved. Use WM_KEYFIRST (0x0100) to specify the first keyboard message or WM_MOUSEFIRST (0x0200) to specify the first mouse message. Use WM_INPUT here and in wMsgFilterMax to specify only the WM_INPUT messages. If wMsgFilterMin and wMsgFilterMax are both zero, GetMessage returns all available messages (that is, no range filtering is performed).
            0        // wMsgFilterMax: The integer value of the highest message value to be retrieved. Use WM_KEYLAST to specify the last keyboard message or WM_MOUSELAST to specify the last mouse message. Use WM_INPUT here and in wMsgFilterMin to specify only the WM_INPUT messages. If wMsgFilterMin and wMsgFilterMax are both zero, GetMessage returns all available messages (that is, no range filtering is performed).
            ))
    {
        TranslateMessage( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-translatemessage
            &msg          // lpMsg: A pointer to an MSG structure that contains message information retrieved from the calling thread's message queue by using the GetMessage or PeekMessage function.
        );
        DispatchMessageW( // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-dispatchmessagew
            &msg          // lpMsg: A pointer to a structure that contains the message.
        );
    }

    // 6. Release all the GUI resources after GetMessageW receive WM_QUIT message.
    UnregisterClassW(MainUIWindowClassName, HandleToInstanceWindowOwner); // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-unregisterclassw

    return msg.wParam;
}

DWORD WINAPI ThreadProc( // For more information, see https://docs.microsoft.com/en-us/previous-versions/windows/desktop/legacy/ms686736(v=vs.85)
    IN LPVOID lpParam    // The thread data passed to the function using the lpParameter parameter of the CreateThread, CreateRemoteThread, or CreateRemoteThreadEx function.
)
{
    DWORD ExitCode = -1;
    const HINSTANCE HandleToInstanceThisDLL = *((HINSTANCE *)lpParam);
    if (HandleToInstanceThisDLL == NULL)
    {
        MessageBoxW(NULL, L"当前DLL句柄是无效的", NULL, MB_OK);
    }
    else
    {
        HMODULE HandleToModuleThisDLL;
        if (GetModuleHandleExW(                         // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-getmodulehandleexw
                GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS, // dwFlags: This parameter can be zero or one or more of the following values. If the module's reference count is incremented, the caller must use the FreeLibrary function to decrement the reference count when the module handle is no longer needed.
                (LPCWSTR)HandleToInstanceThisDLL,       // lpModuleName: The name of the loaded module (either a .dll or .exe file), or an address in the module (if dwFlags is GET_MODULE_HANDLE_EX_FLAG_FROM_ADDRESS).
                &HandleToModuleThisDLL                  // phModule: A handle to the specified module. If the function fails, this parameter is NULL.
                ))
        {

            // Calling LoadLibrary within DllMain can cause a deadlock or a crash and are discouraged by Miscrosoft DLL best practices https://docs.microsoft.com/en-us/windows/win32/dlls/dynamic-link-library-best-practices, so we call it inside of a new thread.
            const HMODULE HandleToModuleSSOCommon = LoadLibraryW(L".\\SSOCommon.dll"); // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-loadlibraryw
            if (HandleToModuleSSOCommon == NULL)
            {
                MessageBoxW(NULL, L"无法加载SSOCommon.dll", NULL, MB_OK);
            }
            else
            {
                const HMODULE HandleToModuleSSOPlatform = LoadLibraryW(L".\\SSOPlatform.dll");
                if (HandleToModuleSSOPlatform == NULL)
                {
                    MessageBoxW(NULL, L"无法加载SSOPlatform.dll", NULL, MB_OK);
                }
                else
                {
                    const HWND HandleToQQTangWindow = FindHandleToQQTangWindow();
                    if (HandleToQQTangWindow == NULL)
                    {
                        MessageBoxW(NULL, L"没找到QQ堂的窗口句柄", NULL, MB_OK);
                    }
                    else
                    {
                        ExitCode = ShowQQTangCheatWindow(HandleToInstanceThisDLL, HandleToQQTangWindow);
                    }
                    FreeLibrary(HandleToModuleSSOPlatform);
                }
                FreeLibrary(HandleToModuleSSOCommon); // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-freelibrary
            }
            // We need to ensure DLL is released after the thread has finished. For more information, see https://stackoverflow.com/a/39245021/9980245
            FreeLibraryAndExitThread(  // For more information, see https://docs.microsoft.com/en-us/windows/win32/api/libloaderapi/nf-libloaderapi-freelibraryandexitthread
                HandleToModuleThisDLL, // hLibModule: A handle to the DLL module whose reference count the function decrements. The LoadLibrary or GetModuleHandleEx function returns this handle.
                ExitCode               // dwExitCode: The exit code for the calling thread.
            );
        }
        else
        {
            MessageBoxW(NULL, L"无法增加当前DLL引用计数", NULL, MB_OK);
        }
    }

    return ExitCode;
}

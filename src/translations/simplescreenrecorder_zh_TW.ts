<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="zh_TW">
<context>
    <name>DialogAbout</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="98"/>
        <source>About SimpleScreenRecorder</source>
        <translation>關於 SimpleScreenRecorder</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="107"/>
        <source>For more information:</source>
        <translation>更多資訊：</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="108"/>
        <source>The source code of this program can be found at:</source>
        <translation>程式原始碼見：</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="109"/>
        <source>This program uses:</source>
        <translation>程式使用了：</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="110"/>
        <source>%1 for the graphical user interface</source>
        <translation>%1 用於圖形使用者界面</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="111"/>
        <source>%1 or %2 (depending on your distribution) for video/audio encoding</source>
        <translation>%1 或者 %2 （取決於您使用的發行版）用於影片/聲音編碼</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="112"/>
        <source>%1 for hooking system functions for OpenGL recording</source>
        <translation>%1 為掛接用於 OpenGL 錄製的系統函數</translation>
    </message>
</context>
<context>
    <name>DialogGLInject</name>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="36"/>
        <source>OpenGL Settings</source>
        <translation>OpenGL 設定</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="39"/>
        <source>&lt;p&gt;Warning: OpenGL recording works by injecting a library into the program that will be recorded. This library will override some system functions in order to capture the frames before they are displayed on the screen. If you are trying to record a game that tries to detect hacking attempts on the client side, it&apos;s (theoretically) possible that the game will consider this a hack. This might even get you banned, so it&apos;s a good idea to make sure that the program you want to record won&apos;t ban you, *before* you try to record it. You&apos;ve been warned :).&lt;/p&gt;

&lt;p&gt;Another warning: OpenGL recording is experimental, it may not work or even crash the program you are recording. If you are worried about losing program data, make a backup first!&lt;/p&gt;

&lt;p&gt;If you want to record Steam games, &lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;read this first&lt;/a&gt;.&lt;/p&gt;</source>
        <translation>&lt;p&gt;警告：OpenGL 錄製需要將函式庫加載到錄製的目標，此函式庫會把一些系統函數替換掉以用來擷取目標程式在視窗顯示前的影格。如果你試圖錄製會在本地偵測外掛的遊戲，（理論上）遊戲會將此行為當做作弊，可能導致您被封鎖。因此，在錄製前請先確認目標會不會將您封鎖。&lt;/p&gt;
&lt;p&gt;再次警告：OpenGL 錄製處於實驗性階段，可能用不了甚至會導致目標程式當掉。如果您擔心數據遺失，請先做好備份！&lt;/p&gt;
&lt;p&gt;如果您想錄製串流遊戲，&lt;a href=&quot;http://www.maartenbaert.be/simplescreenrecorder/recording-steam-games/&quot;&gt;請先閱讀這個&lt;/a&gt;。&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="53"/>
        <source>Choose channel</source>
        <translation>選擇頻道</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="55"/>
        <source>Channel name:</source>
        <translation>頻道名稱：</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="57"/>
        <source>Channel names are used to identify applications. You only need to use this if you want to record multiple applications at the same time.
If you leave this empty, the default name &apos;channel-YOURUSERNAME&apos; will be used.</source>
        <translation>頻道名稱用來識別應用程式。只有當您要同時錄製多個應用程式時才需要使用它。
如果留空，將會使用預設名稱「channel-YOURUSERNAME」。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="75"/>
        <source>Launch application</source>
        <translation>啟動程式</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="77"/>
        <source>Command:</source>
        <translation>命令：</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="79"/>
        <source>This command will be executed to start the program that should be recorded.</source>
        <translation>此命令將會啟動將要被錄製的目標程式。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="81"/>
        <source>Working directory:</source>
        <translation>工作目錄：</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="83"/>
        <source>The command will be executed in this directory. If you leave this empty, the working directory won&apos;t be changed.</source>
        <translation>此命令將會在此目錄執行，如果您留空，工作目錄將不會改變。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="85"/>
        <source>Launch automatically</source>
        <translation>自動啟動</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="86"/>
        <source>If checked, the application will be launched automatically once you go to the recording page. If not checked, you have to start it manually.</source>
        <translation>如果勾選，當您到錄製頁面時應用程式會自動啟動。如果沒有勾選，您必須手動啟動它。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="88"/>
        <source>Launch now</source>
        <translation>現在啟動</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="109"/>
        <source>Stream settings</source>
        <translation>串流設定</translation>
    </message>
    <message>
        <source>Source:</source>
        <translation type="obsolete">來源：</translation>
    </message>
    <message>
        <source>Start the OpenGL application automatically</source>
        <translation type="obsolete">自動運行OpenGL應用程式</translation>
    </message>
    <message>
        <source>If checked, the above command will be executed automatically (combined with some environment variables). If not checked,
you have to start the OpenGL application yourself (the full command, including the required environment variables, is shown in the log).</source>
        <translation type="obsolete">如果勾選，上述命令將會自動執行（結合當前環境變量）。如果不選，您需自行進行OpenGL應用程式（完整的命令，包括在日誌顯示需要的環境變量）。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="59"/>
        <source>Relax shared memory permissions (insecure)</source>
        <translation>放寬共享記憶體的權限（不安全）</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="60"/>
        <source>If checked, other users on the same machine will be able to attach to the shared memory that&apos;s used for communication with the OpenGL program.
This means other users can (theoretically) see what you are recording, modify the frames, inject their own frames, or simply disrupt the communication.
This even applies to users that are logged in remotely (ssh). You should only enable this if you need to record a program that runs as a different user.</source>
        <translation>如果勾選，其他本機使用者將可以訪問到用於跟 OpenGL 程式通信的共享記憶體。
（理論上）這意味著其他使用者可以知道您在錄製什麼、修改影格、加入他們的影格或者斷開通信，
甚至是透過 ssh 遠端登入的使用者也可以。您應只在錄製以不同使用者身份執行的目標程式時啟用此選項。</translation>
    </message>
    <message>
        <source>Maximum image size (megapixels):</source>
        <translation type="obsolete">最大圖像大小（百萬像素）：</translation>
    </message>
    <message>
        <source>This setting changes the amount of shared memory that will be allocated to send frames back to the main program.
The size of the shared memory can&apos;t be changed anymore once the program has been started, so if the program you
are trying to record is too large, recording won&apos;t work. 2 megapixels should be enough in almost all cases. Be careful,
high values will use a lot of memory!</source>
        <translation type="obsolete">此設定會改變將影格送到主程式的共享記憶體大小，程式一旦啟動您將不能再更改其大小。因此，如果您錄製的目標程式過大，錄製將會失敗。通常情況下，200萬像素足够了，但請注意，值越大占用的記憶體將越大！</translation>
    </message>
    <message>
        <source>Capture front buffer instead of back buffer</source>
        <translation type="obsolete">擷取前端緩衝而不是後端緩衝</translation>
    </message>
    <message>
        <source>If checked, the injected library will read the front buffer (the frame that&apos;s currently on the screen) rather than the back buffer
(the new frame). This may be useful for some special applications that draw directly to the screen.</source>
        <translation type="obsolete">如果勾選，注入的函式庫將會讀取前端緩衝區（當前螢幕影格）而不是後端緩衝（新影格）。這對於那些直接繪製到螢幕的程式來說是非常有用的。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="111"/>
        <source>Limit application frame rate</source>
        <translation>限制應用程式影格率</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="112"/>
        <source>If checked, the injected library will slow down the application so the frame rate doesn&apos;t become higher than the recording frame rate.
This stops the application from wasting CPU time for frames that won&apos;t be recorded, and sometimes results in smoother video
(this depends on the application).</source>
        <translation>如果勾選，注入的函式庫將會使目標程式影格率下降使其不高於錄製的影格率。
這會減少應用程式將 CPU 占用時間浪費於不會被錄製的影格，並且有時使得錄製的影片較流暢（取決於目標程式）。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="121"/>
        <source>Close</source>
        <translation>關閉</translation>
    </message>
</context>
<context>
    <name>Logger</name>
    <message>
        <location filename="../AV/FastResampler.cpp" line="124"/>
        <source>Error: Resample ratio is out of range!</source>
        <translation>錯誤：重新取樣率超出範圍！</translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="128"/>
        <source>Error: Drift ratio is out of range!</source>
        <translation>錯誤：漂移比值超出範圍！</translation>
    </message>
    <message>
        <location filename="../AV/FastResampler.cpp" line="158"/>
        <source>Resample ratio is %1 (was %2).</source>
        <translation>重新取樣率為 %1 （原本為 %2）。</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="129"/>
        <source>Warning: Pixel format is not supported (%1 -&gt; %2), using swscale instead. This is not a problem, but performance will be worse.</source>
        <translation>警告：不支援的像素格式 (%1 -&gt; %2)，使用 swscale 代替。這不是問題，但是性能會更糟。</translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="138"/>
        <location filename="../Benchmark.cpp" line="124"/>
        <location filename="../Benchmark.cpp" line="205"/>
        <source>Error: Can&apos;t get swscale context!</source>
        <comment>Don&apos;t translate &apos;swscale&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/FastScaler.cpp" line="160"/>
        <location filename="../AV/FastScaler.cpp" line="185"/>
        <location filename="../AV/FastScaler.cpp" line="210"/>
        <location filename="../AV/FastScaler.cpp" line="234"/>
        <location filename="../AV/FastScaler.cpp" line="256"/>
        <location filename="../AV/FastScaler.cpp" line="279"/>
        <source>Warning: Memory is not properly aligned for SSE, using fallback converter instead. This is not a problem, but performance will be worse.</source>
        <comment>Don&apos;t translate &apos;fallback&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="33"/>
        <source>Warning: An overrun has occurred, some samples were lost.</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="35"/>
        <source>Error: Can&apos;t recover device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="39"/>
        <source>Error: Can&apos;t start PCM device after overrun!</source>
        <comment>Don&apos;t translate &apos;overrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="67"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="64"/>
        <location filename="../AV/Input/JACKInput.cpp" line="55"/>
        <location filename="../AV/Input/X11Input.cpp" line="218"/>
        <source>Stopping input thread ...</source>
        <translation>正在停止輸入線程...</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="97"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="237"/>
        <source>Generating source list ...</source>
        <translation>正在產生來源清單...</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="116"/>
        <source>Error: Could not update ALSA configuration!</source>
        <translation>錯誤：無法更新 ALSA 設定！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="176"/>
        <source>Warning: Could not open sound card %1.</source>
        <translation>警告：無法開啟音效卡 %1。</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="182"/>
        <source>Warning: Could not get info for sound card %1.</source>
        <translation>警告：無法取得音效卡 %1 資訊。</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="163"/>
        <source>Found plugin: [%1] %2</source>
        <translation>找到擴充套件：[%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="186"/>
        <source>Found card: [%1] %2</source>
        <translation>找到卡：[%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="211"/>
        <source>Found device: [%1] %2</source>
        <translation>找到裝置：[%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="260"/>
        <location filename="../AV/SimpleSynth.cpp" line="124"/>
        <source>Error: Can&apos;t open PCM device!</source>
        <translation>錯誤：無法開啟 PCM 裝置！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="264"/>
        <location filename="../AV/SimpleSynth.cpp" line="128"/>
        <source>Error: Can&apos;t get PCM hardware parameters!</source>
        <translation>錯誤：無法獲取 PCM 硬體參數！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="270"/>
        <location filename="../AV/SimpleSynth.cpp" line="134"/>
        <source>Error: Can&apos;t set access type!</source>
        <translation>錯誤：無法設定連接型態！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="276"/>
        <location filename="../AV/SimpleSynth.cpp" line="140"/>
        <source>Error: Can&apos;t set sample format!</source>
        <translation>錯誤：無法設定取樣格式！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="283"/>
        <location filename="../AV/SimpleSynth.cpp" line="147"/>
        <source>Error: Can&apos;t set sample rate!</source>
        <translation>錯誤：無法設定取樣率！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="287"/>
        <location filename="../AV/SimpleSynth.cpp" line="151"/>
        <source>Warning: Sample rate %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation>警告：取樣率 %1 不支援，使用 %2 取代。這不是問題。</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="296"/>
        <location filename="../AV/SimpleSynth.cpp" line="159"/>
        <source>Error: Can&apos;t set channel count!</source>
        <translation>無法設定通道數！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="300"/>
        <source>Warning: Channel count %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="309"/>
        <location filename="../AV/SimpleSynth.cpp" line="166"/>
        <source>Error: Can&apos;t set period size!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="313"/>
        <location filename="../AV/SimpleSynth.cpp" line="170"/>
        <source>Warning: Period size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="322"/>
        <location filename="../AV/SimpleSynth.cpp" line="179"/>
        <source>Error: Can&apos;t set buffer size!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="326"/>
        <location filename="../AV/SimpleSynth.cpp" line="183"/>
        <source>Warning: Buffer size %1 is not supported, using %2 instead. This is not a problem.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="334"/>
        <location filename="../AV/SimpleSynth.cpp" line="191"/>
        <source>Error: Can&apos;t apply PCM hardware parameters!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="352"/>
        <source>Error: Can&apos;t start PCM device!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="373"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="181"/>
        <location filename="../AV/Input/JACKInput.cpp" line="237"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="335"/>
        <location filename="../AV/Input/X11Input.cpp" line="428"/>
        <source>Input thread started.</source>
        <translation>輸入線程已啟動。</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="388"/>
        <source>Error: Can&apos;t read samples!</source>
        <translation>錯誤：無法讀取樣本！</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="414"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="249"/>
        <location filename="../AV/Input/JACKInput.cpp" line="288"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="428"/>
        <location filename="../AV/Input/X11Input.cpp" line="543"/>
        <source>Input thread stopped.</source>
        <translation>輸入線程已停止。</translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="418"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="253"/>
        <location filename="../AV/Input/JACKInput.cpp" line="292"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="432"/>
        <location filename="../AV/Input/X11Input.cpp" line="547"/>
        <source>Exception &apos;%1&apos; in input thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/ALSAInput.cpp" line="421"/>
        <location filename="../AV/Input/GLInjectInput.cpp" line="256"/>
        <location filename="../AV/Input/JACKInput.cpp" line="295"/>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="435"/>
        <location filename="../AV/Input/X11Input.cpp" line="550"/>
        <source>Unknown exception in input thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="314"/>
        <source>Error: Can&apos;t get shared memory!</source>
        <translation>錯誤：無法取得共享記憶體！</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="319"/>
        <source>Error: Can&apos;t attach to shared memory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="71"/>
        <source>Error: Could not connect to JACK!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="80"/>
        <source>Error: Could not create JACK port!</source>
        <translation>錯誤：無法建立 JACK 接口！</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="86"/>
        <source>Error: Could not set JACK process callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="90"/>
        <source>Error: Could not set JACK sample rate callback!</source>
        <translation>錯誤：無法設定 JACK 取樣率回調！</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="94"/>
        <source>Error: Could not set JACK xrun callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="98"/>
        <source>Error: Could not set JACK port connect callback!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="103"/>
        <source>Error: Could not activate JACK client!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="111"/>
        <location filename="../AV/Input/JACKInput.cpp" line="122"/>
        <location filename="../AV/Input/JACKInput.cpp" line="251"/>
        <source>Connecting port %1 to %2.</source>
        <translation>正在連接接口 %1 到 %2。</translation>
    </message>
    <message>
        <location filename="../AV/Input/JACKInput.cpp" line="255"/>
        <source>Disconnecting port %1 from %2.</source>
        <translation>正在中斷接口從 %2 到 %1。</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="34"/>
        <source>Error: pa_mainloop_prepare failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_prepare&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="38"/>
        <source>Error: pa_mainloop_poll failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_poll&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="42"/>
        <source>Error: pa_mainloop_dispatch failed!</source>
        <comment>Don&apos;t translate &apos;pa_mainloop_dispatch&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="52"/>
        <source>Error: Could not create main loop!</source>
        <translation type="unfinished">錯誤：無法建立主循環！</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="59"/>
        <source>Error: Could not create context!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="64"/>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio. Try using the ALSA backend instead.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="68"/>
        <source>Error: Could not connect! Reason: %1
It is possible that your system doesn&apos;t use PulseAudio.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="82"/>
        <source>Error: Connection attempt failed! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="119"/>
        <source>Error: Could not create stream! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="126"/>
        <source>Error: Could not connect stream! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="137"/>
        <source>Error: Stream connection attempt failed! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="228"/>
        <source>Found source: [%1] %2</source>
        <translation>找到來源：[%1] %2</translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="249"/>
        <source>Error: Could not get names of sources! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="297"/>
        <source>Error: Could not get source info! Reason: %1</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="302"/>
        <source>Stream is a monitor.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="304"/>
        <source>Stream is not a monitor.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="349"/>
        <source>Error: pa_stream_peek failed!</source>
        <comment>Don&apos;t translate &apos;pa_stream_peek&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="416"/>
        <source>Warning: Audio source was suspended. The current segment will be stopped until the source is resumed.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/PulseAudioInput.cpp" line="421"/>
        <source>Warning: Stream was moved to a different source.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="74"/>
        <source>Error: Unsupported X11 image pixel format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="197"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="96"/>
        <source>Error: Width or height is zero!</source>
        <translation>錯誤：寬度或高度是 0！</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="201"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="100"/>
        <source>Error: Width or height is too large, the maximum width and height is %1!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="253"/>
        <location filename="../GUI/HotkeyListener.cpp" line="118"/>
        <source>Error: Can&apos;t open X display!</source>
        <comment>Don&apos;t translate &apos;display&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="262"/>
        <source>Using X11 shared memory.</source>
        <translation>使用 X11 共享記憶體。</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="309"/>
        <source>Error: Can&apos;t create shared image!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="264"/>
        <source>Not using X11 shared memory.</source>
        <translation>沒有使用 X11 共享記憶體。</translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="271"/>
        <source>Warning: XFixes is not supported by X server, the cursor has been hidden.</source>
        <comment>Don&apos;t translate &apos;XFixes&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="367"/>
        <source>Warning: Xinerama is not supported by X server, multi-monitor support may not work properly.</source>
        <comment>Don&apos;t translate &apos;Xinerama&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="373"/>
        <source>Warning: No monitors detected, multi-monitor support may not work properly.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="392"/>
        <source>Error: Invalid screen bounding box!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="324"/>
        <source>Error: Can&apos;t attach server to shared memory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="494"/>
        <source>Error: Can&apos;t get image (using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/X11Input.cpp" line="505"/>
        <source>Error: Can&apos;t get image (not using shared memory)!
    Usually this means the recording area is not completely inside the screen. Or did you change the screen resolution?</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="172"/>
        <source>Warning: Codec option &apos;%1&apos; was not recognised!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="100"/>
        <source>Error: Channel count is zero.</source>
        <translation>錯誤：通道數是零。</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="104"/>
        <source>Error: Sample rate is zero.</source>
        <translation>錯誤：取樣率是零。</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="142"/>
        <source>Using sample format %1.</source>
        <translation>使用取樣格式 %1。</translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="147"/>
        <source>Error: Encoder requires an unsupported sample format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="176"/>
        <source>Error: Sending of audio frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="197"/>
        <source>Error: Receiving of audio packet failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/AudioEncoder.cpp" line="210"/>
        <location filename="../AV/Output/AudioEncoder.cpp" line="232"/>
        <source>Error: Encoding of audio frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="96"/>
        <source>Stopping encoder thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="267"/>
        <source>Error: Can&apos;t find codec!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="277"/>
        <source>Using codec %1 (%2).</source>
        <translation>使用編碼 %1 (%2)。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="320"/>
        <source>Warning: This codec is considered experimental by libav/ffmpeg.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="30"/>
        <location filename="../AV/Output/BaseEncoder.cpp" line="39"/>
        <source>Error: Option &apos;%1&apos; could not be parsed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="164"/>
        <source>Error: Can&apos;t open codec!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="188"/>
        <source>Encoder thread started.</source>
        <translation>編碼器線程開始。</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="217"/>
        <source>Flushing encoder ...</source>
        <translation type="unfinished">重刷編碼器...</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="228"/>
        <source>Encoder thread stopped.</source>
        <translation>編碼器線程已停止。</translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="232"/>
        <source>Exception &apos;%1&apos; in encoder thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/BaseEncoder.cpp" line="235"/>
        <source>Unknown exception in encoder thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="70"/>
        <source>Stopping encoders ...</source>
        <translation>正在停止編碼器...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="77"/>
        <source>Waiting for muxer thread to stop ...</source>
        <translation>正在等待多工器線程停止...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="146"/>
        <source>Error: Can&apos;t write header!</source>
        <comment>Don&apos;t translate &apos;header&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="157"/>
        <source>Finishing encoders ...</source>
        <translation>完成編碼...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="288"/>
        <source>Error: Can&apos;t create new stream!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="307"/>
        <source>Error: Can&apos;t get codec context defaults!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="199"/>
        <source>Error: Can&apos;t find chosen output format!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="100"/>
        <location filename="../AV/Output/Muxer.cpp" line="124"/>
        <source>Error: Can&apos;t copy parameters to stream!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="203"/>
        <source>Using format %1 (%2).</source>
        <translation>使用格式 %1 (%2)。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="209"/>
        <source>Error: Can&apos;t allocate format context!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="216"/>
        <source>Error: Can&apos;t open output file!</source>
        <translation>錯誤：無法開啟輸出檔案！</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="229"/>
        <source>Error: Can&apos;t write trailer, continuing anyway.</source>
        <comment>Don&apos;t translate &apos;trailer&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="295"/>
        <source>Error: Can&apos;t create new codec context!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="336"/>
        <source>Muxer thread started.</source>
        <translation>多工器線程已啟動。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="396"/>
        <source>Error: Can&apos;t write frame to muxer!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="424"/>
        <source>Muxer thread stopped.</source>
        <translation>多工器線程已停止。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="428"/>
        <source>Exception &apos;%1&apos; in muxer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Muxer.cpp" line="431"/>
        <source>Unknown exception in muxer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="220"/>
        <source>Stopping synchronizer thread ...</source>
        <translation>正在停止同步線程...</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="328"/>
        <source>Warning: Received video frame with non-monotonic timestamp.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="355"/>
        <source>Warning: Video buffer overflow, some frames will be lost. The audio input seems to be too slow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="412"/>
        <source>Warning: Received audio samples with non-monotonic timestamp.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="437"/>
        <source>Warning: Too many audio samples, dropping samples to keep the audio in sync with the video.</source>
        <translation>警告：太多的聲音取樣，丟棄取樣保持音訊與視訊同步。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="443"/>
        <source>Warning: Not enough audio samples, inserting silence to keep the audio in sync with the video.</source>
        <translation>警告：聲音取樣不足，插入靜音，來保持聲音與影像同步。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="509"/>
        <source>Warning: Audio input is more than 2% too slow!</source>
        <translation>警告：輸入聲音慢於 2%！</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="513"/>
        <source>Warning: Audio input is more than 2% too fast!</source>
        <translation>警告：輸入聲音快於 2%！</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="548"/>
        <source>Warning: Audio buffer overflow, starting new segment to keep the audio in sync with the video (some video and/or audio may be lost). The video input seems to be too slow.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="584"/>
        <source>Warning: Received hole in audio stream, inserting silence to keep the audio in sync with the video.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="885"/>
        <source>Synchronizer thread started.</source>
        <translation>同步運作線程已啟動。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="907"/>
        <source>Synchronizer thread stopped.</source>
        <translation>同步運作線程已停止。</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="911"/>
        <source>Exception &apos;%1&apos; in synchronizer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="914"/>
        <source>Unknown exception in synchronizer thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="104"/>
        <source>Error: Width or height is not an even number!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="108"/>
        <source>Error: Frame rate is zero!</source>
        <translation>錯誤：影格率是 0！</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="165"/>
        <source>Using pixel format %1.</source>
        <translation>使用像素格式 %1。</translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="179"/>
        <source>Error: The pixel format is not supported by the codec!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="207"/>
        <source>Error: Sending of video frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="228"/>
        <source>Error: Receiving of video packet failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/VideoEncoder.cpp" line="241"/>
        <location filename="../AV/Output/VideoEncoder.cpp" line="262"/>
        <source>Error: Encoding of video frame failed!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="41"/>
        <source>Using real-time priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="51"/>
        <source>Using nice priority.</source>
        <comment>Don&apos;t translate &apos;nice&apos;, it&apos;s a UNIX parameter that defines the priority of a process.</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="56"/>
        <source>Warning: Can&apos;t increase the thread priority.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="64"/>
        <source>Error: Can&apos;t recover device after underrun!</source>
        <comment>Don&apos;t translate &apos;underrun&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="91"/>
        <source>Stopping synth thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="224"/>
        <source>Synth thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="277"/>
        <source>Error: Can&apos;t write samples!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="285"/>
        <source>Synth thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="289"/>
        <source>Exception &apos;%1&apos; in synth thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/SimpleSynth.cpp" line="292"/>
        <source>Unknown exception in synth thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../common/CPUFeatures.cpp" line="45"/>
        <source>CPU features</source>
        <translation>CPU 功能</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="124"/>
        <source>Error: Command-line option &apos;%1&apos; does not take a value!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="158"/>
        <source>Error: Unknown command-line option &apos;%1&apos;!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="168"/>
        <source>Error: Unknown command-line argument &apos;%1&apos;!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="208"/>
        <source>SSR started</source>
        <translation>SSR 已啟動</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="239"/>
        <source>SSR stopped</source>
        <translation>SSR 已停止</translation>
    </message>
    <message>
        <location filename="../Main.cpp" line="256"/>
        <source>Error: Can&apos;t create .ssr directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/GLInjectInput.cpp" line="150"/>
        <source>Error: Could not read stream, this usually means that the stream was already gone.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="64"/>
        <source>Created video stream reader.</source>
        <translation>已建立影片串流閱讀器。</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="69"/>
        <source>Error: Can&apos;t open video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="76"/>
        <source>Error: Can&apos;t resize video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="83"/>
        <source>Error: Can&apos;t memory-map video stream file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="92"/>
        <source>Error: Can&apos;t open video frame file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="142"/>
        <source>Destroyed video stream reader.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="238"/>
        <source>Error: Size of video frame file is incorrect!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamReader.cpp" line="247"/>
        <source>Error: Can&apos;t memory-map video frame file!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="94"/>
        <source>Error: Can&apos;t create channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="102"/>
        <source>Error: Can&apos;t stat channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="106"/>
        <source>Error: Channel directory is not a regular directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="111"/>
        <source>Error: Can&apos;t set channel directory mode!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="116"/>
        <source>Error: Channel directory is owned by a different user! Choose a different channel name, or enable relaxed file permissions to use it anyway.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="126"/>
        <source>Error: Can&apos;t initialize inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="132"/>
        <source>Error: Can&apos;t watch channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="144"/>
        <source>Error: Can&apos;t open channel directory!</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="162"/>
        <source>Added pre-existing stream %1.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="197"/>
        <source>Error: Can&apos;t get read length from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="205"/>
        <source>Error: Can&apos;t read from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="215"/>
        <source>Error: Received partial event from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="227"/>
        <source>Error: Received partial name from inotify!</source>
        <comment>don&apos;t translate &apos;inotify&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="241"/>
        <source>Added stream %1.</source>
        <translation>已加入串流 %1。</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="249"/>
        <source>Removed stream %1.</source>
        <translation>已移除串流 %1。</translation>
    </message>
    <message>
        <location filename="../AV/Input/SSRVideoStreamWatcher.cpp" line="275"/>
        <source>Deleted abandoned stream %1.</source>
        <translation>已刪除拋棄的串流 %1。</translation>
    </message>
    <message>
        <location filename="../GUI/DialogGLInject.cpp" line="161"/>
        <source>The application could not be launched.</source>
        <translation>應用程式無法啟動。</translation>
    </message>
    <message>
        <location filename="../GUI/HotkeyListener.cpp" line="164"/>
        <source>Warning: XInput2 is not supported by X server, hotkeys may not work in some applications.</source>
        <comment>Don&apos;t translate &apos;XInput2&apos;</comment>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="165"/>
        <source>BGRA %1 to BGRA %2  |  SWScale %3 us  |  Fallback %4 us (%5%)  |  SSSE3 %6 us (%7%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="243"/>
        <source>%1 %2 to %3 %4  |  SWScale %5 us  |  Fallback %6 us (%7%)  |  SSSE3 %8 us (%9%)</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="253"/>
        <source>Starting scaler benchmark ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../Benchmark.cpp" line="260"/>
        <source>Starting converter benchmark ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="70"/>
        <source>Stopping fragment thread ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="346"/>
        <source>Fragment thread started.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="364"/>
        <source>Next fragment ...</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="368"/>
        <source>Finishing ...</source>
        <translation>正在完成...</translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="380"/>
        <source>Fragment thread stopped.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="384"/>
        <source>Exception &apos;%1&apos; in fragment thread.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../AV/Output/OutputManager.cpp" line="387"/>
        <source>Unknown exception in fragment thread.</source>
        <translation type="unfinished"></translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../GUI/MainWindow.cpp" line="75"/>
        <source>SimpleScreenRecorder has detected that you are using the proprietary NVIDIA driver with flipping enabled. This is known to cause glitches during recording. It is recommended to disable flipping. Do you want me to do this for you?

You can also change this option manually in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation>SimpleScreenRecorder 偵測到您正在使用 NVIDIA 閉源驅動程式且開啟了 flipping 功能。這會導致錄製不穩定，建議您停用它。您要停用嗎？

您也可以在 NVIDIA 控制面板手動更改它。</translation>
    </message>
    <message>
        <location filename="../GUI/MainWindow.cpp" line="93"/>
        <source>I couldn&apos;t disable flipping for some reason - sorry! Try disabling it in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation>非常抱歉，無法停用 flipping 功能。請您嘗試在 NVIDIA 面板停用它。</translation>
    </message>
</context>
<context>
    <name>PageDone</name>
    <message>
        <location filename="../GUI/PageDone.cpp" line="30"/>
        <source>The recording has been saved. You can edit the video now, or re-encode it with better settings to make the file smaller (the default settings are optimized for quality and speed, not file size).</source>
        <translation>影片已存檔，你現在可以編輯影片或是更改設定重新編碼以減少體積（預設為優化品質和速度，並非檔案大小）。</translation>
    </message>
    <message>
        <location filename="../GUI/PageDone.cpp" line="33"/>
        <source>Back to the start screen</source>
        <translation>返回開始頁面</translation>
    </message>
</context>
<context>
    <name>PageInput</name>
    <message>
        <location filename="../GUI/PageInput.cpp" line="240"/>
        <source>Video input</source>
        <translation>視訊輸入</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="243"/>
        <source>Record the entire screen</source>
        <translation>錄製整個螢幕</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="244"/>
        <source>Record a fixed rectangle</source>
        <translation>錄製固定的區域</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="245"/>
        <source>Follow the cursor</source>
        <translation>跟隨游標</translation>
    </message>
    <message>
        <source>Record OpenGL (experimental)</source>
        <translation type="obsolete">錄製OpenGL（實驗性）</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="256"/>
        <source>Select what monitor should be recorded in a multi-monitor configuration.</source>
        <translation>在多監視器配置中選擇需要錄製的監視器。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="257"/>
        <source>Record entire screen with cursor</source>
        <translation>錄製游標的整個螢幕</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="258"/>
        <source>Record the entire screen on which the cursor is located, rather than following the cursor position.</source>
        <translation>錄製游標所在的整個螢幕，而不是跟隨游標位置。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="259"/>
        <source>Select rectangle...</source>
        <translation>選擇區域...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="260"/>
        <source>Use the mouse to select the recorded rectangle.</source>
        <translation>使用滑鼠選擇錄製區域。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="261"/>
        <source>Select window...</source>
        <translation>選擇視窗...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="262"/>
        <source>Use the mouse to select a window to record.
Hint: If you click the border of a window, the entire window will be recorded (including the borders). Otherwise only
the client area of the window will be recorded.</source>
        <translation>使用滑鼠游標選擇要錄製的視窗。
提示：如果您選擇視窗邊框，則整個視窗區域都會被錄製（包括邊框），其它情況的話只會錄製視窗工作區域。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="266"/>
        <source>OpenGL settings...</source>
        <translation>OpenGL 設定...</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="267"/>
        <source>Change the settings for OpenGL recording.</source>
        <translation>變更 OpenGL 錄製設定。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="269"/>
        <source>Left:</source>
        <translation>左：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="273"/>
        <source>The x coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>錄製區域左上角的 x 座標。
提示：您也可以用滑鼠滾輪或上下方向鍵來改變這個值。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="275"/>
        <source>Top:</source>
        <translation>上：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="279"/>
        <source>The y coordinate of the upper-left corner of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>錄製區域左上角的 y 座標。
提示：您也可以用滑鼠滾輪或上下方向鍵來改變這個值。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="281"/>
        <source>Width:</source>
        <translation>寬：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="285"/>
        <source>The width of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>錄製區域寬度。
提示：您也可以用滑鼠滾輪或上下方向鍵來改變這個值。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="287"/>
        <source>Height:</source>
        <translation>高：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="291"/>
        <source>The height of the recorded rectangle.
Hint: You can also change this value with the scroll wheel or the up/down arrows.</source>
        <translation>錄製區域高度。
提示：您也可以用滑鼠滾輪或上下方向鍵來改變這個值。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="293"/>
        <source>Frame rate:</source>
        <translation>影格率：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="297"/>
        <source>The number of frames per second in the final video. Higher frame rates use more CPU time.</source>
        <translation>錄製後影片的每秒影格數，越高越占用 CPU 時間。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="298"/>
        <source>Scale video</source>
        <translation>縮放影片</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="299"/>
        <source>Enable or disable scaling. Scaling uses more CPU time, but if the scaled video is smaller, it could make the encoding faster.</source>
        <translation>啟用或停用影片縮放。縮放需要更多的 CPU 時間，但如果縮放後影片較小，可能會加快編碼。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="300"/>
        <source>Scaled width:</source>
        <translation>縮放寬度：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="304"/>
        <source>Scaled height:</source>
        <translation>縮放高度：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="308"/>
        <source>Record cursor</source>
        <translation>錄製游標</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="390"/>
        <source>Audio input</source>
        <translation>音訊輸入</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="392"/>
        <source>Record audio</source>
        <translation>錄音</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="393"/>
        <source>Backend:</source>
        <translation>後端：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="405"/>
        <source>The audio backend that will be used for recording.
The ALSA backend will also work on systems that use PulseAudio, but it is better to use the PulseAudio backend directly.</source>
        <translation>錄製所用的音訊後端。
ALSA 後端在使用 PulseAudio 的系統上也能運作，但最好直接使用 PulseAudio 後端。</translation>
    </message>
    <message>
        <source>Device:</source>
        <translation type="obsolete">設備：</translation>
    </message>
    <message>
        <source>The ALSA device that will be used for recording. Normally this should be &apos;default&apos;.
You can change this to something like plughw:0,0 (which means sound card 0 input 0 with plugins enabled).</source>
        <comment>Don&apos;t translate &apos;default&apos; and &apos;plughw&apos;</comment>
        <translation type="obsolete">將會使用ALSA設備錄製，通常情況下這是預設選項。
您可以改成其它類似plughw:0,0的值（意思是音效卡0輸入0後用擴充套件）。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="411"/>
        <location filename="../GUI/PageInput.cpp" line="420"/>
        <source>Source:</source>
        <translation>來源：</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="423"/>
        <source>The PulseAudio source that will be used for recording.
A &apos;monitor&apos; is a source that records the audio played by other applications.</source>
        <comment>Don&apos;t translate &apos;monitor&apos; unless PulseAudio does this as well</comment>
        <translation>用來錄製的 PulseAudio 來源。
「monitor」即是錄製其它程式播放的聲音來源。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="416"/>
        <location filename="../GUI/PageInput.cpp" line="425"/>
        <source>Refresh</source>
        <translation>重新整理</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="426"/>
        <source>Refreshes the list of PulseAudio sources.</source>
        <translation>重新整理 PulseAudio 來源清單。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="429"/>
        <source>Record system microphone</source>
        <translation>錄製系統麥克風</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="431"/>
        <source>Record system speakers</source>
        <translation>錄製系統喇叭</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="430"/>
        <source>If checked, the ports will be automatically connected to the system capture ports.</source>
        <translation>如果勾選，接口將自動連接到系統擷取接口。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="238"/>
        <source>Input profile</source>
        <translation>輸入設定檔</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="247"/>
        <source>Record OpenGL</source>
        <translation>錄製 OpenGL</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="408"/>
        <source>The audio backend that will be used for recording.</source>
        <translation>用來錄製的音訊後端。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="414"/>
        <source>The ALSA source that will be used for recording.
The default is usually fine. The &apos;shared&apos; sources allow multiple programs to record at the same time, but they may be less reliable.</source>
        <translation>用來錄製的 ALSA 來源。
通常使用預設值就好。「shared」來源讓多個程式可以同時錄製，但是可能較不可靠。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="417"/>
        <source>Refreshes the list of ALSA sources.</source>
        <translation>重新整理 ALSA 來源的清單。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="432"/>
        <source>If checked, the ports will be automatically connected to anything that connects to the system playback ports.</source>
        <translation>如果勾選，接口將自動連接到任何連接到系統播放接口的端口。</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="479"/>
        <source>Back</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="480"/>
        <source>Continue</source>
        <translation>繼續</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="905"/>
        <source>All screens: %1x%2</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>所有螢幕：%1x%2</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="909"/>
        <source>Screen %1: %2x%3 at %4,%5</source>
        <comment>This appears in the screen selection combobox</comment>
        <translation>螢幕 %1：%2x%3 位於 %4,%5</translation>
    </message>
    <message>
        <location filename="../GUI/PageInput.cpp" line="1121"/>
        <source>Screen %1</source>
        <comment>This appears in the screen labels</comment>
        <translation>螢幕 %1</translation>
    </message>
    <message>
        <source>You did not enter a command to start the OpenGL application that you want to record.
Click the &apos;OpenGL settings&apos; button and enter a command.</source>
        <translation type="obsolete">您未輸入任何命令來啟動想要錄製的 OpenGL 應用程式。
點擊“OpenGL設定”按鈕，然後輸入命令。</translation>
    </message>
</context>
<context>
    <name>PageOutput</name>
    <message>
        <source>files</source>
        <comment>This appears in the file dialog, e.g. &apos;MP4 files&apos;</comment>
        <translation type="obsolete">檔案</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="83"/>
        <location filename="../GUI/PageOutput.cpp" line="86"/>
        <location filename="../GUI/PageOutput.cpp" line="89"/>
        <location filename="../GUI/PageOutput.cpp" line="92"/>
        <location filename="../GUI/PageOutput.cpp" line="134"/>
        <source>%1 files</source>
        <comment>This appears in the file dialog, e.g. &apos;MP4 files&apos;</comment>
        <translation>%1 檔案</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="95"/>
        <location filename="../GUI/PageOutput.cpp" line="101"/>
        <location filename="../GUI/PageOutput.cpp" line="108"/>
        <source>Other...</source>
        <translation>其它...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="107"/>
        <source>Uncompressed</source>
        <translation>不壓縮</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="174"/>
        <source>Error: Could not find any suitable container in libavformat!</source>
        <translation>錯誤：無法在 libavformat 找到任何適當的容器！</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="178"/>
        <source>Error: Could not find any suitable video codec in libavcodec!</source>
        <translation>錯誤：無法在 libavcodec 找到任何適當的視訊編解碼器！</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="182"/>
        <source>Error: Could not find any suitable audio codec in libavcodec!</source>
        <translation>錯誤：無法在 libavcodec 找到任何適當的音訊編解碼器！</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="190"/>
        <source>Output profile</source>
        <translation>輸出設定檔</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="192"/>
        <source>File</source>
        <translation>檔案</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="194"/>
        <source>Save as:</source>
        <translation>另存新檔：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="196"/>
        <source>The recording will be saved to this location.</source>
        <translation>錄製品將會儲存在這裡。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="197"/>
        <source>Browse...</source>
        <translation>瀏覽...</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="198"/>
        <source>Separate file per segment</source>
        <translation>將檔案分段</translation>
    </message>
    <message>
        <source>If checked, a separate video file will be created every time you pause and resume the recording.
If the original file name is &apos;test.mkv&apos;, the segments will be saved as &apos;test-0001.mkv&apos;, &apos;test-0002.mkv&apos;, ...
File names that exist already will be skipped.</source>
        <translation type="obsolete">如果勾選，在每次您暫停/繼續錄製時會産生一個分段影片。
如果原來檔案名稱是“test.mkv”，分段名稱將會是“test-0001.mkv”、“test-0002.mkv”...
如果檔案名已經存在，則會跳過。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="204"/>
        <source>Container:</source>
        <translation>容器：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="209"/>
        <source>(not installed)</source>
        <translation>（未安裝）</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="212"/>
        <source>The container (file format) that will be used to save the recording.
Note that not all codecs are supported by all containers, and that not all media players can read all file formats.
- Matroska (MKV) supports all the codecs, but is less well-known.
- MP4 is the most well-known format and will play on almost any modern media player, but supports only H.264 video
   (and many media players only support AAC audio).
- WebM is intended for embedding video into websites (with the HTML5 &lt;video&gt; tag). The format was created by Google.
   WebM is supported by default in Firefox, Chrome and Opera, and plugins are available for Internet Explorer and Safari.
   It supports only VP8 and Vorbis.
- OGG supports only Theora and Vorbis.</source>
        <translation>用來儲存錄製的容器（即檔案格式）。
請注意並非所有編碼所有的容器都支援，也並非所有播放器都支援所有檔案格式。
- Matroska (MKV) 支援所有編碼，但沒那麼有名。
- MP4 是最為人所知的格式，絶大多數播放器都可以播放，但僅支援 H.264 視訊
   （大部分播放器僅支援 AAC 音訊）。
- WebM 用於將影片嵌入網站上（使用 HTML5 的 &lt;video&gt; 標籤），此格式由 Google 創立。
   WebM 在 Firefox、Chrome 和 Opera 下預設是支援的，IE 和 Safari 也可以使用擴充套件支援。
   它只支援 VP8 和 Vorbis。
- OGG 僅支援 Theora 和Vorbis。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="221"/>
        <source>Container name:</source>
        <translation>容器名稱：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="227"/>
        <source>For advanced users. You can use any libav/ffmpeg format, but many of them are not useful or may not work.</source>
        <translation>適用於專家，您可以任意的使用 libav/ffmpeg 格式，但大多數沒什麼用還可能無法運作。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="248"/>
        <source>Video</source>
        <translation>視訊</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="250"/>
        <location filename="../GUI/PageOutput.cpp" line="330"/>
        <source>Codec:</source>
        <translation>編解碼器：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="255"/>
        <source>The codec that will be used to compress the video stream.
- H.264 (libx264) is by far the best codec - high quality and very fast.
- VP8 (libvpx) is quite good but also quite slow.
- Theora (libtheora) isn&apos;t really recommended because the quality isn&apos;t very good.</source>
        <translation>用於壓縮視訊串流的編碼。
- H.264 (libx264) 目前是最好的編碼，高品質且速度快。
- VP8 (libvpx) 是個不錯的選擇但十分地慢。
- Theora (libtheora) 並不推薦使用它，因品質不是很好。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="259"/>
        <location filename="../GUI/PageOutput.cpp" line="343"/>
        <source>Codec name:</source>
        <translation>編碼器名稱：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="265"/>
        <source>For advanced users. You can use any libav/ffmpeg video codec, but many of them are not useful or may not work.</source>
        <translation>適用於專家，您可以任意的使用 libav/ffmpeg 視訊編解碼器，但大多數沒什麼用還可能無法運作。</translation>
    </message>
    <message>
        <source>Bit rate (in kbps):</source>
        <translation type="obsolete">比特率（kbps）：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="199"/>
        <source>If checked, a separate video file will be created every time you pause and resume the recording.If unchecked, all recorded segments will be combined into a single video file.</source>
        <translation>如果勾選，每次您暫停和繼續錄製時，將會建立另一個影片檔。如果沒有勾選，所有錄製的片段會結合為一個單一的影片檔。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="201"/>
        <source>Add timestamp</source>
        <translation>加入時間戳</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="202"/>
        <source>If checked, the current date and time will be appended to the file name automatically.
If the original file name is &apos;test.mkv&apos;, the video will be saved as &apos;test-YYYY-MM-DD_HH.MM.SS.mkv&apos;.</source>
        <translation>如果勾選，目前的日期和時間會自動附加到檔案名稱後面。
如果原本的檔案名稱是「test.mkv」，影片會儲存為「test-YYYY-MM-DD_HH.MM.SS.mkv」。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="266"/>
        <location filename="../GUI/PageOutput.cpp" line="350"/>
        <source>Bit rate (in kbit/s):</source>
        <translation>位元率（以 kbit/s 為單位）：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="268"/>
        <source>The video bit rate (in kilobit per second). A higher value means a higher quality.
If you have no idea where to start, try 5000 and change it if needed.</source>
        <translation>影片的位元率（kbit/s），值越高品質越好。
如果您不知填多少好，試試 5000，如果不行再稍微調整。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="270"/>
        <source>Constant rate factor:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Constant rate factor:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="275"/>
        <source>This setting changes the video quality. A lower value means a higher quality.
The allowed range is 0-51 (0 means lossless, the default is 23).</source>
        <translation>此設定會更改視訊的品質，值越低品質越好。
允許的範圍是 0～51（0 意味着無損，預設值是 23）。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="281"/>
        <source>Preset:</source>
        <comment>libx264 setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>Preset:</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="286"/>
        <source>The encoding speed. A higher speed uses less CPU (making higher recording frame rates possible),
but results in larger files. The quality shouldn&apos;t be affected too much.</source>
        <translation>編碼速度，值越高使用的 CPU 時間越少（使得可以錄製更高的影格率），
但造成檔案體積較大，當然品質不會太受影響。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="288"/>
        <source>CPU used:</source>
        <comment>libvpx setting: don&apos;t translate this unless you can come up with something sensible</comment>
        <translation>CPU 佔用：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="290"/>
        <source>fastest</source>
        <translation>最快</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="295"/>
        <source>slowest</source>
        <translation>最慢</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="296"/>
        <source>The encoding speed. A higher value uses *less* CPU time. (I didn&apos;t choose the name, this is the name
used by the VP8 encoder). Higher values result in lower quality video, unless you increase the bit rate too.</source>
        <translation>編碼速度，值越高使用的 CPU 時間越少（這名稱是 VP8 編碼器用的），同時意味著更低的品質，除非您同時增加位元率。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="298"/>
        <location filename="../GUI/PageOutput.cpp" line="353"/>
        <source>Custom options:</source>
        <translation>自訂選項：</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="300"/>
        <location filename="../GUI/PageOutput.cpp" line="355"/>
        <source>Custom codec options separated by commas (e.g. option1=value1,option2=value2,option3=value3)</source>
        <translation>自訂編碼器選項，由英文逗號分隔（例如 option1=value1,option2=value2,option3=value3）</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="301"/>
        <source>Allow frame skipping</source>
        <translation>允許跳影格</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="302"/>
        <source>If checked, the video encoder will be allowed to skip frames if the input frame rate is
lower than the output frame rate. If not checked, input frames will be duplicated to fill the holes.
This increases the file size and CPU usage, but reduces the latency for live streams in some cases.
It shouldn&apos;t affect the appearance of the video.</source>
        <translation>如果勾選，影片編碼器將會在輸入影格率小於輸出影格率時跳影格。
否則，輸入影格將由重複影格來填補空影格。
這會使得檔案體積變大和占用更多的 CPU 時間，但也會減少實際串流的延遲。
這不會影響影片的視覺效果。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="328"/>
        <source>Audio</source>
        <translation>音訊</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="335"/>
        <source>The codec that will be used to compress the audio stream. You shouldn&apos;t worry too much about
this, because the size of the audio data is usually negligible compared to the size of the video data.
And if you&apos;re only recording your own voice (i.e. no music), the quality won&apos;t matter that much anyway.
- Vorbis (libvorbis) is great, this is the recommended codec.
- MP3 (libmp3lame) is reasonably good.
- AAC is a good codec, but the implementations used here (libvo_aacenc or the experimental ffmpeg aac encoder)
   are pretty bad. Only use it if you have no other choice.
- Uncompressed will simply store the sound data without compressing it. The file will be quite large, but it&apos;s very fast.</source>
        <translation>用於壓縮音訊串流的編解碼器，不用太在意這個，因為聲音數據大小相對於影片數據大小來說是微不足道的。
如果您只錄製自己的聲音（也就是没有音樂之類的），品質不是很重要。
- Vorbis (libvorbis) 非常好用，推薦使用它。
- MP3 (libmp3lame) 還不錯。
- AAC還可以，但這裡的實作（libvo_aacenc 或實驗性的 ffmpeg aac 編碼器）非常差，
   僅推薦在没有其它選擇時使用。
- 不壓縮只是儲存未經壓縮的聲音數據，檔案將會非常大，但是速度也很快。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="349"/>
        <source>For advanced users. You can use any libav/ffmpeg audio codec, but many of them are not useful or may not work.</source>
        <translation>適用於專家，您可以任意的使用 libav/ffmpeg 音訊編解碼器，但大多數没什麼用還可能無法運作。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="352"/>
        <source>The audio bit rate (in kilobit per second). A higher value means a higher quality. The typical value is 128.</source>
        <translation>音頻位元率（kbit/s），值越高品質越好，通常用 128。</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="377"/>
        <source>Back</source>
        <translation>返回</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="378"/>
        <source>Continue</source>
        <translation>繼續</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="632"/>
        <location filename="../GUI/PageOutput.cpp" line="640"/>
        <source>not installed</source>
        <translation>未安装</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="634"/>
        <location filename="../GUI/PageOutput.cpp" line="642"/>
        <source>not supported by container</source>
        <translation>不受容器支援</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="685"/>
        <source>Save recording as</source>
        <translation>儲存錄製為</translation>
    </message>
    <message>
        <location filename="../GUI/PageOutput.cpp" line="526"/>
        <source>You did not select an output file!</source>
        <translation>您還沒選擇輸出檔案！</translation>
    </message>
    <message>
        <source>The file &apos;%1&apos; already exists. Are you sure that you want to overwrite it?</source>
        <translation type="obsolete">檔案%1已經存在，確定要覆蓋嗎？</translation>
    </message>
</context>
<context>
    <name>PageRecord</name>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="168"/>
        <source>Recording</source>
        <translation>錄製</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="172"/>
        <source>Enable recording hotkey</source>
        <translation>啟用錄製熱鍵</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="174"/>
        <source>Enable sound notifications</source>
        <translation>啟用聲音通知</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="176"/>
        <source>Hotkey:</source>
        <translation>熱鍵：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="177"/>
        <source>Ctrl +</source>
        <translation>Ctrl +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="178"/>
        <source>Shift +</source>
        <translation>Shift +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="179"/>
        <source>Alt +</source>
        <translation>Alt +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="180"/>
        <source>Super +</source>
        <translation>Super +</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="182"/>
        <source>The key that you have to press (combined with the given modifiers) to start or pause recording.
The program that you are recording will not receive the key press.</source>
        <translation>開始/暫停錄製的按鍵（結合修改按鍵）。
被錄製的程式將無法接收到設定的按鍵消息。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="226"/>
        <source>Information</source>
        <translation>資訊</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="228"/>
        <source>Total time:</source>
        <translation>總共時間：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="230"/>
        <source>FPS in:</source>
        <translation>輸入 FPS：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="232"/>
        <source>FPS out:</source>
        <translation>輸出 FPS：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="234"/>
        <source>Size in:</source>
        <translation>輸入大小：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="236"/>
        <source>Size out:</source>
        <translation>輸出大小：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="238"/>
        <source>File name:</source>
        <translation>檔案名稱：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="241"/>
        <source>File size:</source>
        <translation>檔案大小：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="243"/>
        <source>Bit rate:</source>
        <translation>位元率：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="266"/>
        <source>Preview</source>
        <translation>預覽</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="270"/>
        <source>Preview frame rate:</source>
        <translation>預覽影格率：</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="274"/>
        <source>Note: Previewing requires extra CPU time (especially at high frame rates).</source>
        <translation>注意：預覽需要額外的 CPU 時間（尤其是高影格率時）。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="323"/>
        <source>Log</source>
        <translation>記錄</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="338"/>
        <location filename="../GUI/PageRecord.cpp" line="346"/>
        <source>Cancel recording</source>
        <translation>取消錄製</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="339"/>
        <location filename="../GUI/PageRecord.cpp" line="348"/>
        <source>Save recording</source>
        <translation>錄製存檔</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="353"/>
        <source>Quit</source>
        <translation>退出</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="396"/>
        <source>You have not saved the current recording yet, if you quit now it will be lost.
Are you sure that you want to quit?</source>
        <translation>您尚未儲存錄製，離開的話會遺失。
您確定要退出程式嗎？</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="408"/>
        <source>Hide window</source>
        <translation>隱藏視窗</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="410"/>
        <source>Show window</source>
        <translation>顯示視窗</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="593"/>
        <source>Starting page ...</source>
        <translation>正在開始頁面...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="625"/>
        <source>Started page.</source>
        <translation>已開始頁面。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="651"/>
        <source>Stopping page ...</source>
        <translation>正在停止頁面...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="925"/>
        <source>Encoding remaining data ...</source>
        <translation>正在編碼剩餘的資料...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="678"/>
        <source>Stopped page.</source>
        <translation>已停止頁面。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="706"/>
        <source>Starting output ...</source>
        <translation>正在開始輸出...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="721"/>
        <source>Error: Could not get the size of the OpenGL application because the GLInject input has not been created.</source>
        <translation>錯誤：無法獲取 OpenGL 應用程式的大小，因為 GLInject 輸入沒有啟動。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="726"/>
        <source>Error: Could not get the size of the OpenGL application. Either the application wasn&apos;t started correctly, or the application hasn&apos;t created an OpenGL window yet. If you want to start recording before starting the application, you have to enable scaling and enter the video size manually.</source>
        <translation>錯誤：無法獲取 OpenGL 應用程式的大小。可能是應用程式沒有正確啟動，或者應用程式還沒建立 OpenGL 視窗。如果您要在啟動應用程式前開始錄製，您必須啟用縮放並手動輸入視訊大小。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="765"/>
        <source>Started output.</source>
        <translation>已開始輸出。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="840"/>
        <source>Error: Could not start the GLInject input because it has not been created.</source>
        <translation>錯誤：無法啟動 GLInject 輸入，因為還沒有建立。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="616"/>
        <location filename="../GUI/PageRecord.cpp" line="774"/>
        <location filename="../GUI/PageRecord.cpp" line="870"/>
        <source>Error: Something went wrong during initialization.</source>
        <translation>錯誤：啟動時發生錯誤。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="785"/>
        <source>Stopping output ...</source>
        <translation>正在停止輸出...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="803"/>
        <source>Stopped output.</source>
        <translation>已停止輸出。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="834"/>
        <source>Starting input ...</source>
        <translation>正在開始輸入...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="865"/>
        <source>Started input.</source>
        <translation>已開始輸入。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="894"/>
        <source>Stopping input ...</source>
        <translation>正在停止輸入...</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="909"/>
        <source>Stopped input.</source>
        <translation>已停止輸入。</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1018"/>
        <location filename="../GUI/PageRecord.cpp" line="1028"/>
        <source>Pause recording</source>
        <translation>暫停錄製</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1021"/>
        <location filename="../GUI/PageRecord.cpp" line="1031"/>
        <source>Start recording</source>
        <translation>開始錄製</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1039"/>
        <source>Stop preview</source>
        <translation>停止預覽</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1042"/>
        <source>Start preview</source>
        <translation>開始預覽</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1072"/>
        <source>Error: Something went wrong while creating the synth.</source>
        <translation type="unfinished"></translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1115"/>
        <source>Are you sure that you want to cancel this recording?</source>
        <translation>您確定要取消本次錄製嗎？</translation>
    </message>
    <message>
        <location filename="../GUI/PageRecord.cpp" line="1130"/>
        <source>You haven&apos;t recorded anything, there is nothing to save.

The start button is at the top ;).</source>
        <translation>您尚未進行錄製，無需存檔。
開始按鈕在頂部呢 ;)。</translation>
    </message>
</context>
<context>
    <name>PageWelcome</name>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="40"/>
        <source>&lt;p&gt;Welcome to SimpleScreenRecorder!&lt;/p&gt;

&lt;p&gt;Despite the name, this program actually has a lot of options. Don&apos;t worry though, there are really just two things that you need to know. One, the default settings are usually fine. If you don&apos;t know what something does, just use the default. Two, almost all settings have tooltips. Just hover the mouse over something to find out what it does.&lt;/p&gt;

&lt;p&gt;For more information:&lt;br&gt;
%1&lt;/p&gt;</source>
        <translation>&lt;p&gt;歡迎使用 SimpleScreenRecorder！&lt;/p&gt;
&lt;p&gt;儘管稱為「簡單」，但本程式實際上是有很多功能的。别擔心，事實上您只需要知道兩件事。一個是預設通常是好的，如果你不知道某些選項的功能，使用預設的就好；另一個是所有選項都會有提示的，將滑鼠游標移動到相關選項上就可以看到了。&lt;/p&gt;
&lt;p&gt;更多資訊：&lt;br&gt;
%1&lt;/p&gt;</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="50"/>
        <source>About SimpleScreenRecorder</source>
        <translation>關於 SimpleScreenRecorder</translation>
    </message>
    <message>
        <location filename="../GUI/PageWelcome.cpp" line="72"/>
        <source>Continue</source>
        <translation>繼續</translation>
    </message>
</context>
<context>
    <name>ProfileBox</name>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="37"/>
        <source>Save</source>
        <translation>儲存</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="38"/>
        <source>Save the current settings to this profile.</source>
        <translation>儲存目前的設定到這個設定檔。</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="39"/>
        <source>New</source>
        <translation>新增</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="40"/>
        <source>Create a new profile with the current settings.</source>
        <translation>使用目前的設定建立新的設定檔。</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="41"/>
        <source>Delete</source>
        <translation>刪除</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="42"/>
        <source>Delete this profile.</source>
        <translation>刪除設定檔。</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="96"/>
        <source>(none)</source>
        <translation>（無）</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="139"/>
        <source>Error: Can&apos;t load profile!</source>
        <translation>錯誤：無法載入設定檔！</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="147"/>
        <source>Are you sure that you want to overwrite this profile?</source>
        <translation>你確定要覆寫這個設定檔嗎？</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="159"/>
        <source>Enter a name for the new profile:</source>
        <translation>輸入新設定檔的名稱：</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="165"/>
        <source>A profile with the same name already exists. Are you sure that you want to replace it?</source>
        <translation>相同名稱的設定檔已存在。你確定要取代它嗎？</translation>
    </message>
    <message>
        <location filename="../GUI/ProfileBox.cpp" line="181"/>
        <source>Are you sure that you want to delete this profile?</source>
        <translation>你確定要刪除這個設定檔嗎？</translation>
    </message>
</context>
<context>
    <name>QDialogButtonBox</name>
    <message>
        <location filename="../common/Dialogs.cpp" line="35"/>
        <location filename="../common/Dialogs.cpp" line="72"/>
        <source>&amp;OK</source>
        <translation>確定(&amp;O)</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="36"/>
        <location filename="../common/Dialogs.cpp" line="73"/>
        <source>&amp;Cancel</source>
        <translation>取消(&amp;C)</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="37"/>
        <source>&amp;Yes</source>
        <translation>是(&amp;Y)</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="38"/>
        <source>Yes, always</source>
        <translation>是，總是</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="39"/>
        <source>&amp;No</source>
        <translation>否(&amp;N)</translation>
    </message>
    <message>
        <location filename="../common/Dialogs.cpp" line="40"/>
        <source>No, never</source>
        <translation>不，永不</translation>
    </message>
</context>
<context>
    <name>QObject</name>
    <message>
        <source>SimpleScreenRecorder has detected that you are using the proprietary NVIDIA driver with flipping enabled. This is known to cause glitches during recording. It is recommended to disable flipping. Do you want me to do this for you?

You can also change this option manually in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation type="obsolete">SimpleScreenRecorder偵測到您正在使用NVIDIA閉源驅動且開啟了flipping功能，這會導致錄製不穩定，建議您停用它。您想要停用嗎？
您也可以在NVIDIA控制面板手動更改它。</translation>
    </message>
    <message>
        <source>I couldn&apos;t disable flipping for some reason - sorry! Try disabling it in the NVIDIA control panel.</source>
        <comment>Don&apos;t translate &apos;flipping&apos; unless NVIDIA does the same</comment>
        <translation type="obsolete">非常抱歉，無法停用 flipping 功能，請您嘗試在 NVIDIA 面板停用。</translation>
    </message>
</context>
<context>
    <name>SyncDiagram</name>
    <message>
        <location filename="../AV/Output/SyncDiagram.cpp" line="50"/>
        <source>Synchronization Diagram</source>
        <translation>圖同步</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="257"/>
        <source>Video in</source>
        <translation>影片輸入</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="258"/>
        <source>Audio in</source>
        <translation>聲音輸入</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="259"/>
        <source>Video out</source>
        <translation>影片輸出</translation>
    </message>
    <message>
        <location filename="../AV/Output/Synchronizer.cpp" line="260"/>
        <source>Audio out</source>
        <translation>聲音輸出</translation>
    </message>
</context>
</TS>

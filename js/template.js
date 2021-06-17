function header_ja() {
    document.querySelector("header").innerHTML = `
    <nav>
        <a class="header-logo underbar" href="../index.html">
            <img src="../img/light_logo.png" name="logo" alt="YUTO's portfolio top" height="50px">
        </a>
        <ul class="header-li">
            <li><span></span><a class="underbar" href="index.html">ホーム</a></li>
            <li><span></span><a class="underbar" href="myworks.html">作品集</a></li>
            <li><span></span><a class="underbar" href="reference.html">参考文献</a></li>
            <li><span></span><a class="underbar" href="contact.html">コンタクト</a></li>
        </ul>
        <ul class="selector">
            <li>
                <label class="underbar">ダークモード<input type="checkbox" id="turn-dark" class="toggle"></label>
            </li>
            <li>
                <a href="../en/` + location.href.split('/').pop() + `" class="underbar">EN</a>
                <span class="linebetween"></span>
                <a href="../ja/` + location.href.split('/').pop() + `" class="underbar">JA</a>
            </li>
        </ul>
        <input value="MENU" type="button" id="btn-menu" class="btn-menu">
    </nav>
    `
}

function header_en() {
    document.querySelector("header").innerHTML = `
    <nav>
        <a class="header-logo underbar" href="../index.html">
            <img src="../img/light_logo.png" name="logo" alt="YUTO's portfolio top" height="50px">
        </a>
        <ul class="header-li">
            <li><span></span><a class="underbar" href="index.html">Home</a></li>
            <li><span></span><a class="underbar" href="myworks.html">My Works</a></li>
            <li><span></span><a class="underbar" href="reference.html">Reference</a></li>
            <li><span></span><a class="underbar" href="contact.html">Contact</a></li>
        </ul>
        <ul class="selector">
            <li>
                <label class="underbar">Dark Mode<input type="checkbox" id="turn-dark" class="toggle"></label>
            </li>
            <li>
                <a href="../en/` + location.href.split('/').pop() + `" class="underbar">EN</a>
                <span class="linebetween"></span>
                <a href="../ja/` + location.href.split('/').pop() + `" class="underbar">JA</a>
            </li>
        </ul>
        <input value="MENU" type="button" id="btn-menu" class="btn-menu">
    </nav>
    `
}

function aside_ja() {
    document.querySelector("aside").innerHTML = `
    <h3>
        Tips
    </h3>
    <p>
        このwebサイトでは、ダークモード非対応のブラウザでもダークモードを利用できます。ブラウザがダークモードに対応している場合は、自動的に切り替えを行います。 また、別途ヘッダーのボタンから変更することも可能です。お気軽にどうぞ！
    </p>
    <h3>
        Site Map
    </h3>
    <p>
        <div class="sitemap">
            <ul>
                <li><a href="../index.html">Top</a>
                    <ul>
                        <li>日本語
                            <ul>
                                <li><a href="../ja/index.html">ホーム</a></li>
                                <li><a href="../ja/myworks.html">作品集</a></li>
                                <li><a href="../ja/reference.html">参考文献</a></li>
                                <li><a href="../ja/contact.html">コンタクト</a></li>
                            </ul>
                        </li>

                        <li>English
                            <ul>
                                <li><a href="../en/index.html">Home</a></li>
                                <li><a href="../en/myworks.html">My Works</a></li>
                                <li><a href="../en/reference.html">Reference</a></li>
                                <li><a href="../en/contact.html">Contact</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </p>
    `
}

function aside_en() {
    document.querySelector("aside").innerHTML = `
    <h3>
        Tips
    </h3>
    <p>
        On this website, even if you use a browser incompatible with dark mode, it is able to turn on dark mode.
        If your browser is compatible with dark mode, the mode is automatically set.
        You may also switch the mode from a button in header. Feel free to switch mode!
    </p>
    <h3>
        Site Map
    </h3>
    <p>
        <div class="sitemap">
            <ul>
                <li><a href="../index.html">Top</a>
                    <ul>
                        <li>日本語
                            <ul>
                                <li><a href="../ja/index.html">ホーム</a></li>
                                <li><a href="../ja/myworks.html">作品集</a></li>
                                <li><a href="../ja/reference.html">参考文献</a></li>
                                <li><a href="../ja/contact.html">コンタクト</a></li>
                            </ul>
                        </li>

                        <li>English
                            <ul>
                                <li><a href="../en/index.html">Home</a></li>
                                <li><a href="../en/myworks.html">My Works</a></li>
                                <li><a href="../en/reference.html">Reference</a></li>
                                <li><a href="../en/contact.html">Contact</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </p>
`
}
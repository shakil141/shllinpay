   $(document).ready(function () {
        $(".responsive-menu-bar li").click(function () {
            $(".main-menu-bar").css({ "transform": "translateX(0rem)" })
            $(".wrapper-overlay").css({ "display": "block" })
        })
        $(".wrapper-overlay").click(function () {
            $(".main-menu-bar").css({ "transform": "translateX(35rem)" })
            $(".wrapper-overlay").css({ "display": "none" })
        })
    });
!function () {

    $(function () {

        $(".title-ul li").click(function () {
            console.log($(this).index());
            for (var i = 0; i < $(".title-ul li").length; i++) {
                $(".title-ul li").removeClass("active");
            }
            $(".title-ul li").eq($(this).index()).addClass("active");
        });












    });
}();
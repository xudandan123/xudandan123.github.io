!function () {

    $(function () {

        $(".title-ul li").click(function (e) {
            for (var i = 0; i < $(".title-ul li").length; i++) {
                $(".title-ul li").removeClass("active");
            }
            $(".title-ul li").eq($(this).index()).addClass("active");
            getContent($(this).attr("codes"));
        });


        getContent("page001");

        function getContent(codes) {
            $.get("./html/" + codes + ".html", function (data) {
                $(".content").html(data);
            });
        }




    });
}();
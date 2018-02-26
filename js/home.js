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

        $(".icon-jiajianzujianjiahao").click(function () {
            $(".sunText").show();
        });


        $('#summernote').summernote({
            height: 390,                 // set editor height
            width:1000,
            minHeight: null,             // set minimum height of editor
            maxHeight: null,             // set maximum height of editor
            focus: true,
            lang: 'zh-CN', // default: 'en-US'
            toolbar: [
                // [groupName, [list of button]]
                ['style', ['bold', 'italic', 'underline', 'clear']],
                ['font', ['picture', 'table', 'hr', 'link']],
                ['fontsize', ['fontname','fontsize']],
                ['color', ['color']],
                ['para', ['ul', 'ol', 'paragraph']],
                ['height', ['height','codeview']]
            ],
            callbacks: {
                onChange: function () {
                    var sHTML = $('#summernote').summernote('code');
                }
            }
        });

        $(".saves").click(function () {
            document.execCommand("Copy",false , null); // 执行浏览器复制命令
            $(".sunText").hide();
        });

    });
}();
jQuery(document).ready(($) => {
    $('.rkit-social-share__link').click((event) => {
        var SocMed = $(event.currentTarget).data('social-media');
        switch (SocMed) {
            case 'facebook':
                var url = encodeURIComponent(window.location.href);
                var title = encodeURIComponent(document.title);
                window.open('https://www.facebook.com/sharer/sharer.php?u=' + url + '&title=' + title, 'facebook-share-dialog', 'width=626,height=436');
                break;
            case 'twitter':
                var url = encodeURIComponent(window.location.href);
                var text = encodeURIComponent(document.title);
                window.open('https://twitter.com/intent/tweet?url=' + url + '&text=' + text, 'twitter-share-dialog', 'width=626,height=436');
                break;
            case 'whatsapp':
                var text = encodeURIComponent(window.location.href);
                window.open('https://api.whatsapp.com/send?text=' + text, 'wa-share-dialog', ' width=626,height=626 ');
                break;
            case 'pinterest':
                var url = encodeURIComponent(window.location.href);
                var media = (document.querySelector('meta[property="og:image"]')) ? encodeURIComponent(document.querySelector('meta[property="og:image"]').getAttribute('content')) : '';
                var description = (document.querySelector('meta[property="og:description"]')) ? encodeURIComponent(document.querySelector('meta[property="og:description"]').getAttribute('content')) : '';
                window.open('https://www.pinterest.com/pin/create/button/?url=' + url + '&media=' + media + '&description=' + description, 'pinterest-share-dialog', 'width=750,height=430');
                break;
            case 'linkedin':
                var url = encodeURIComponent(window.location.href);
                var title = encodeURIComponent(document.title);
                window.open('https://www.linkedin.com/shareArticle?mini=true&url=' + url + '&title=' + title, 'linkedin-share-dialog', 'width=750,height=430');
                break;
            case 'reddit':
                var url = encodeURIComponent(window.location.href);
                var title = encodeURIComponent(document.title);
                window.open('https://www.reddit.com/submit?url=' + url + '&title=' + title, 'reddit-share-dialog', 'width=500,height=500');
                break;
            case 'quora':
                var url = encodeURIComponent(window.location.href);
                var title = encodeURIComponent(document.title);
                window.open('https://www.quora.com/share?url=' + url + '&title=' + title, 'quora-share-dialog', 'width=626,height=436');
                break;
            case 'telegram':
                var url = encodeURIComponent(window.location.href);
                window.open('https://t.me/share/url?url=' + url, 'telegram-share-dialog', 'width=626,height=626');
                break;
            case 'line':
                var url = encodeURIComponent(window.location.href);
                window.open('https://line.me/R/msg/text/' + url, 'line-share-dialog', 'width=626 , height=626');
                break;
        }
    });
});
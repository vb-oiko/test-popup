var Popup = (function(){
    return {
        init: function(){
            var S = {
                clickMeBtn: $('.content__btn'),
                popup: $('.popup'),
                overlay: $('.popup__overlay'),
                cancelIcon: $('.popup__close-icon'),
                cancelBtn: $('.popup__btn-cancel'),
                uninstallBtn: $('.popup__btn-uninstall'),
            };

            S.clickMeBtn.on('click', function (){
                S.popup.fadeIn(1000);
            });
            
            S.overlay.on('click', function(ev){
                if ($(ev.target).is(S.overlay)){
                    S.popup.fadeOut(1000);
                };
            });

            S.cancelIcon.on('click', function(ev){
                if ($(ev.target).is(S.cancelIcon)){
                    S.popup.fadeOut(1000);
                };
            });

            S.cancelBtn.on('click', function(ev){
                if ($(ev.target).is(S.cancelBtn)){
                    S.popup.fadeOut(1000);
                };
            });

            S.uninstallBtn.on('click', function(ev){
                if ($(ev.target).is(S.uninstallBtn)){
                    S.popup.fadeOut(1000, function(){
                        alert('DONE');
                    });
                };
            });
        },
    };
})();

Popup.init();
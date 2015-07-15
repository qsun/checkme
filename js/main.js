(function () {
    var CheckMe = function (account_id) {
        this.account_id = account_id;
        
        document.addEventListener('mouseover', this.hover, true);
        document.addEventListener('click', this.hover, true);
    }

    CheckMe.prototype.hover = function (event) {
        console.log(event);
        var target = event.currentTarget ? event.currentTarget : event.srcElement;

        console.log(target.tagName);
        if (target && target.tagName && (target.tagName.toLowerCase() === 'a')) {
            console.log('report');
            this.report('hover', target);
        }
    }

    CheckMe.prototype.start = function () {
    }

    CheckMe.prototype.report = function (event, target) {
                console.log(event);
        console.log(target);

    }

    window.CheckMe = CheckMe;
})()

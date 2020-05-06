Number.prototype.digits = function() {
    var num, pos;
    if (this > 0) {
        pos = 1;
        num = this;
    }
    else if (this < 0) {
        pos = -1;
        num = -this;
    }
    else {
        return [0, [0]];
    }
    var arr = [];
    while (num != 0) {
        arr.unshift(num % 10);
        num = Math.floor(num / 10);
    }
    return [pos, arr];
};

Array.prototype.int = function() {
    if (this.length == 0) {
        return 0;
    }
    var num = 0;
    this.forEach((value, index, array) => {
        num = num * 10 + value;
    });
    return num;
};

var rev = function(num) {
    if (!Number.isInteger(num)) {
        return undefined;
    }
    var digs = num.digits();
    var pos = digs[0];
    var arr = digs[1];
    arr.reverse();
    var ans = arr.int();
    ans *= pos;
    return ans;
};

var shift = function(num) {
    if (!Number.isInteger(num)) {
        return undefined;
    }
    var digs = num.digits();
    var pos = digs[0];
    var arr = digs[1];
    arr.pop();
    var ans = arr.int();
    ans *= pos;
    return ans;
};

var pos_neg = function(num) {
    return num * -1;
};

var square = function(num) {
    return num * num;
};

var addnum = function(k) {
    if (!k) {
        return undefined;
    }
    return function(num) {
        if (!Number.isInteger(num)) {
            return undefined;
        }
        return (num * 10 + k);
    };
};

var cal = function(op, k) {
    if (!k) {
        return undefined;
    }
    return function(num) {
        switch (op) {
            case '+':
                return (num + k);
                break;
            case '-':
                return (num - k);
                break;
            case '*':
                return (num * k);
                break;
            case '/':
                var ans = num / k;
                if (!Number.isInteger(ans)) {
                    var ansstr = String(ans);
                    if (((ansstr.length - 1) - ansstr.indexOf('.')) > 1) {
                        return undefined;
                    }
                }
                return ans;
                break;
            default:
                return undefined;
                break;
        }
    };
};

var rep = function(pat, aft) {
    if (!pat || !aft) {
        return undefined;
    }
    return function(num) {
        var pattern = new RegExp(String(pat), 'g');
        return Number(String(num).replace(pattern, String(aft)));
    };
};

module.exports = {rev, shift, pos_neg, square, addnum, cal, rep};

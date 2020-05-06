var ops = require('../src/ops');

function argReader(args) {
    this.start = undefined;
    this.end = undefined;
    this.oplist = [];
    args.forEach((arg, i, arr) => {
        var sflag = arg.search(/s=/i);
        if (sflag == 0) {
            this.start = parseInt(arg.slice(2));
            return true;
        }
        var eflag = arg.search(/e=/i);
        if (eflag == 0) {
            this.end = parseInt(arg.slice(2));
            return true;
        }
        var mflag = arg.search(/m=/i);
        if (mflag == 0) {
            this.max = parseInt(arg.slice(2));
            return true;
        }
        var oflag = arg.search(/o=/i);
        if (oflag == 0) {
            var op = arg.slice(2);
            var opdict = {
                'rev': ops.rev,
                '<<': ops.shift,
                '+/-': ops.pos_neg,
                'x^2': ops.square
            };
            this.oplist.push([ op ,
                opdict[op] ? opdict[op] : (
                    ['+', '-', '*', '/'].indexOf(op[0]) >= 0 ?
                    ops.cal(op[0], parseInt(op.slice(1))) : (
                        (() => {
                            var repflag = op.search(/=>/);
                            if (repflag >= 0) {
                                return ops.rep(
                                    parseInt(op.slice(0, repflag)),
                                    parseInt(op.slice(repflag + 2))
                                );
                            }
                            else {
                                return ops.addnum(parseInt(op));
                            }
                        })()
                    )
                )
            ]);
            return true;
        }
        this.error = true;
        return false;
    });
}

module.exports = argReader;

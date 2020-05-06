function dfs(oplist, left, cur, goal) {
    if (left == 0) {
        if (cur == goal) {
            return [];
        }
        else {
            return null;
        }
    }
    if (cur == goal) {
        return [];
    }
    for (var op of oplist) {
        var sol = dfs(oplist, left - 1, op[1](cur), goal);
        if (sol) {
            return [op[0]].concat(sol);
        }
    }
    return null;
}

module.exports = dfs;

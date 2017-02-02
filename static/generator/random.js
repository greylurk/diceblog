// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// random.js
//
// written and released to the public domain by drow <drow@bin.sh>
// http://creativecommons.org/publicdomain/zero/1.0/

function more_random() {
    var a = document.getElementById("output"), b = parseInt(a.rows);
    if (b < 1) {
        b = 1;
    }
    b = generate_list("underdark_encounter", b);
    a.value = b.join("\n");
}

function generate_text(a) {
    if (a = gen_data[a])
        if (a = select_from(a))
            return expand_tokens(a);
    return "";
}

function generate_list(a, b) {
    var c = [], d;
    for (d = 0; d < b; d++)
        c.push(generate_text(a));
    return c;
}

function select_from(a) {
    return a.constructor == Array ?
        select_from_array(a) :
        select_from_table(a);
}

function select_from_array(a) {
    return a[Math.floor(Math.random() * a.length)];
}

function select_from_table(a) {
    var b;
    if (b = scale_table(a)) {
        b = Math.floor(Math.random() * b) + 1;
        var c;
        for (c in a) {
            var d = key_range(c);
            if (b >= d[0] && b <= d[1])
                return a[c]
        }
    }
    return null;
}

function scale_table(a) {
    var b = 0, c;
    for (c in a) {
        var d = key_range(c);
        if (d[1] > b)
            b = d[1]
    }
    return b;
}

function key_range(a) {
    var b;
    return (b = /(\d+)-00/.exec(a)) ?
        [parseInt(b[1]), 100] :
        (b = /(\d+)-(\d+)/.exec(a)) ?
            [parseInt(b[1]), parseInt(b[2])] :
            a == "00" ?
                [100, 100] :
                [parseInt(a), parseInt(a)]
}

function expand_tokens(a) {
    for (var b; b = /{(\w+)}/.exec(a);) {
        b = b[1];
        var c;
        a = (c = generate_text(b)) !== null ?
            a.replace("{" + b + "}", c) :
            a.replace("{" + b + "}", b)
    }
    for (var b; b= /(\d+)d(\d+)\+?(\d*)/.exec(a);) {
        var count = b[1], die = b[2], roll = 1*b[3];
        for(var i=0;i<count;i++) {
            roll += Math.ceil(Math.random()*die)
        }
        a = a.replace(b[0],roll)
    }
    for (var b; b= /(\d+) x (\d+)/.exec(a);) {
        var c = b[1], d = b[2];
        a = a.replace(b[0], 1*c*d);
    }
    return a
}

more_random();

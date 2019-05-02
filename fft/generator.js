let ary = [];
let i = 0;


for(i=0;i<4096;i++) {
    let now = new Date();
    ary.push({
//        t: now.getTime(),
        f: i,
        v: Math.random().toPrecision(6)
//        v: Math.random()
    });
}

process.stdout.write(JSON.stringify(ary));

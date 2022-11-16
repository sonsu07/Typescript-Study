let i: number;

for (i = 0; i < 5; i++) {
    console.log('a');
    setTimeout(function() {
        console.log(i);
    }, 100);
    console.log('b');
}

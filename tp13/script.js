function calcLine(qEl, pEl, rEl) {
    var q = parseFloat(qEl.value) || 0;
    var p = parseFloat(pEl.value) || 0;
    var r = Math.round((q * p) * 100) / 100;
    rEl.textContent = r;
    return r;
    }
    
    document.getElementById('calculate').addEventListener('click', function() {
    var r1 = calcLine(document.getElementById('q1'), document.getElementById('p1'), document.getElementById('r1'));
    var r2 = calcLine(document.getElementById('q2'), document.getElementById('p2'), document.getElementById('r2'));
    var r3 = calcLine(document.getElementById('q3'), document.getElementById('p3'), document.getElementById('r3'));
    var total = Math.round((r1 + r2 + r3) * 100) / 100;
    document.getElementById('total').textContent = total;
    });
    
    document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('q1').value = '';
    document.getElementById('p1').value = '';
    document.getElementById('q2').value = '';
    document.getElementById('p2').value = '';
    document.getElementById('q3').value = '';
    document.getElementById('p3').value = '';
    document.getElementById('r1').textContent = '';
    document.getElementById('r2').textContent = '';
    document.getElementById('r3').textContent = '';
    document.getElementById('total').textContent = '';
    });
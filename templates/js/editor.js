$(document).ready(function() {
impress().init();

// Replace all textareas with editors
$(document).find('textarea').each(
function() {
    var editor = CodeMirror.fromTextArea(this,
        {
            mode: {name: "python", "version": 2, singleLineStringErrors: false},
            lineNumbers: true,
            textWrapping: false,
            indentUnit: 4,
            tabmode: "shift",
            matchBrachets: true,
            autoMatchParens: true,
            extraKeys: {
                "Ctrl-Enter": function(instance) { runcode(instance.getValue()); },
                "Ctrl-/": "undo",
                "Ctrl-L": function (instance) { clearcode(); }
            }
        }
    )});

// Clear the python console when we go to another slide
document.addEventListener("impress:stepleave", function (event) {
     clearcode();
}, false);
function clearcode() {
    $('#stdout').empty();
}
function runcode(code) {
    var outf = function(text) {
        $('#stdout').append(text.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>"));
    };
    Sk.configure({output:outf});
    eval(Sk.importMainWithBody("<stdin>", false, code));
}
});
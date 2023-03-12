function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/QykAkgpi1/model.json', modelReady);
}

function ModelReady(){
    classefier.classify(gotResults);
}
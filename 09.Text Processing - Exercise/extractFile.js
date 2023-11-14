function extractFile(str) {
    let fileInfo = str.split("\\").pop();
    let fileType = fileInfo.split(".").pop();
    let fileName = fileInfo.split(".").slice(0, -1).join(".");
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${fileType}`);
}

extractFile('C:\\Internal\\training-internal\\Template.pptx')
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs')
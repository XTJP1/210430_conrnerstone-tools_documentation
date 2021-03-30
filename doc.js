cornerstoneWebImageLoader.external.cornerstone = cornerstone;
cornerstone.registerImageLoader('http', cornerstoneWebImageLoader.loadimage)
cornerstone.registerImageLoader('https', cornerstoneWebImageLoader.loadimage)

// setup tools
const csTools = cornerstoneTools.init();

// Enable element
const element = document.querySelector('.cornerstone-element');
cornerstone.enable(element);

// Display an image
const imageId = 'https://www.asteris.biz/Keystone/ImageDownload.aspx?ClinicCode=TESTKEYSTONE&ImageId=01b1755e-33d1-4b24-b9af-a4a019689d5f&ImageType=PreviewImage&FrameIndex=0';
cornerstone.loadimage(imageId).then(function(image){
  cornerstone.displayImage(element, image);
});

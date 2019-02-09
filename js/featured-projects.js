
document.addEventListener("DOMContentLoaded", function(event) { 

    // get array of .project items
    var project = document.querySelectorAll('.project div');

    if (project != null) {

        project.forEach(function(project) {

            project.style.opacity = '1';

            // select elements
            var image = project.querySelector('img');
            
            // only make background changes in divs that contain an image
            if (image != null) {
                var src = image.getAttribute('src');
        
                // take image src and set as background with positioning according to the image
                if (src.includes('bauhaus') || src.includes('garamont')) {
                    project.style.background = 'url("' + src + '") no-repeat top center';
                } else {
                    project.style.background = 'url("' + src + '") no-repeat center center';
                }
                
                project.style.backgroundSize = 'cover';
            
                // hide image
                image.style.display = 'none';
            }
        });
    }

});

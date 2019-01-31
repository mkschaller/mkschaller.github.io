// get array of .project items
var project = document.querySelectorAll('.project div');

if (project != null) {
    project.forEach(function(project) {

        // select elements
        var image = project.querySelector('img');
        
        // only make background changes in divs that contain an image
        if (image != null) {
            var src = image.getAttribute('src');
    
            // take image src and set as background with positioning according to the image
            if (src.includes('bauhaus')) {
                project.style.background = 'url("' + src + '") no-repeat top center';
            } else {
                project.style.background = 'url("' + src + '") no-repeat center center';
            }
            
            project.style.backgroundSize = 'cover';
        
            // // hover state
            // project.addEventListener("mouseover", function(event) {
            //     project.style.scale = 'transform: scale(1.2)';
            //     project.style.transition = 'all .5s';
                
            // });
            
            // hide image
            image.style.display = 'none';
        }
    });
}


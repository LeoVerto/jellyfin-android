define(["dialogHelper","layoutManager","dialogText","html!./icons.html","css!./style.css","paper-button","paper-input"],function(t,e,n){return function(i){"string"==typeof i&&(i={title:"",text:i});var o={removeOnClose:!0},r=!1,a=!1;e.tv?(o.size="fullscreen",r=!0,a=!0):(o.modal=!1,o.entryAnimationDuration=160,o.exitAnimationDuration=200);var l=t.createDialog(o);l.classList.add("promptDialog");var p="",c="";return p+='<div class="promptDialogContent">',r&&(p+='<paper-icon-button tabindex="-1" icon="dialog:arrow-back" class="btnPromptExit"></paper-icon-button>'),i.title&&(p+="<h2>",p+=i.title,p+="</h2>"),p+="<form>",p+='<paper-input autoFocus class="txtPromptValue" value="'+(i.value||"")+'" label="'+(i.label||"")+'"></paper-input>',i.description&&(p+='<div class="fieldDescription">',p+=i.description,p+="</div>"),p+="<br/>",a?p+='<paper-button raised class="btnSubmit"><iron-icon icon="dialog:check"></iron-icon><span>'+n.get("Ok")+"</span></paper-button>":(p+='<div class="buttons">',p+='<paper-button class="btnSubmit">'+n.get("Ok")+"</paper-button>",p+='<paper-button class="btnPromptExit">'+n.get("Cancel")+"</paper-button>",p+="</div>"),p+="</form>",p+="</div>",l.innerHTML=p,document.body.appendChild(l),l.querySelector("form").addEventListener("submit",function(e){return c=l.querySelector(".txtPromptValue").value,e.preventDefault(),e.stopPropagation(),setTimeout(function(){t.close(l)},300),!1}),l.querySelector(".btnSubmit").addEventListener("click",function(){var t=document.createElement("input");t.setAttribute("type","submit"),t.style.display="none";var e=l.querySelector("form");e.appendChild(t),t.click(),e.removeChild(t)}),l.querySelector(".btnPromptExit").addEventListener("click",function(){t.close(l)}),t.open(l).then(function(){var t=c;return t?t:Promise.reject()})}});
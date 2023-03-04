const wsUri = " wss://echo-ws-service.herokuapp.com";

const formInput = document.querySelector('.form_input');
const btnSend = document.querySelector('.btn_send');
const btnGeo = document.querySelector('.btn_geo');
const messagesCont = document.querySelector('.messages_container');
const chatContainer =  document.querySelector('.chat_container');

function writeToScreen(message, position='flex-end') {
	let element = `
	<p class='message' style='align-self: ${position}'>
	${message}
	</p>
	`;
	messagesCont.innerHTML += element;
	chatContainer.scrollTop = chatContainer.scrollHeight;
}

let websocket = new WebSocket(wsUri); 
websocket.onopen = function(evt) {
	console.log("CONNECTED");
};
websocket.onmessage = function(evt) {
	writeToScreen(`${evt.data}`, 'flex-start');
};
websocket.onerror = function(evt) {
	writeToScreen(`server: ${evt.data}`, 'flex-start');
};

btnSend.addEventListener('click', () => {
	let message = formInput.value;
	websocket.send(message);
	writeToScreen(`${message}`);
	formInput.value = ''

});

  //Геолокация
  const success = (position) => {
  	let latitude  = position.coords.latitude;
  	let longitude = position.coords.longitude;
  	let geoLink = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
  	writeToScreen(`<a  href='${geoLink}' target='_blank'>Гео-локация</a>`);
  };

  //Сообщения об шибках
  const error = () => {
  	let textErr0r = 'Не удалось получить местоположение';
  	writeToScreen(textErr0r);
  };
  
  btnGeo.addEventListener('click', () => {
  	if (!navigator.geolocation) {
  		console.log('Не поддерживается браузером');
  	} else {
  		navigator.geolocation.getCurrentPosition(success, error);
  	}
  });

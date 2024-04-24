Caso 1 airportFood

Hildebrando está alistando todo para poder viajar a Macondo, el sale de trabajar el día viernes, y tiene un vuelo en la noche, pero el vuelo tiene escala en Medellín. Ese mismo día le pagan a Hildebrando, a Hildebrando le pagan 

hSalary = 2.500.000.

día viernes, Hildebrando llega al aeropuerto del dorado, se quiere comprar algo de comer antes del vuelo, ya que hace escala en Medellín en la madrugada, y llegaría en la mañana a Macondo las opciones que tiene Hildebrando:
- si compra una badFood = almojábana con gaseosa son 15.000
	le caerá mal porque lleva mucho en el stand
- un  goodFood = subway con gaseosa 23.000
	estará llenito y bien
- no compra nada 
	- le tocara comprar algo en Medellín

Imprimir resultados, ir llevando la cuenta de cuanto dinero tiene disponible durante las vacaciones
console.log(hSalary – badFood  or goodFood ) 

Caso 2  suitcaseMeasures
llega a la sala de espera, y revisa su maleta que no cumple con el tamaño de maleta de mano, la aerolínea tiene el tamaño normal para las maletas de mano, 55 cm (alto) x 40 cm (largo) x 20 cm (ancho), y Hildebrando que va a abordar tiene una maleta de 60 cm (alto) x 40 cm (largo)x 20x cm.
airportSuitcase = {
alto : 55
largo : 40
ancho: 20
}


Hsuitcase = {
alto : 60
largo : 40
ancho: 20
}

Es un poco más grande el tamaño normal, debe sacar ropa para disminuir el tamaño de la maleta. como puede solucionar con matemáticas para que el área sea igual a la normal, y que de las medidas correctas del tamaño que pide la aerolínea?  Usar .math 

La idea fundamental es que necesitamos reducir cada dimensión de la maleta proporcionalmente para que todas las dimensiones cumplan con los límites establecidos por la aerolínea.
Instrucciones matemáticas:

1. Factor de reducción para cada dimensión:
    • Para el alto, calculamos el factor de reducción como .
    • Para el largo, calculamos el factor de reducción como .
    • Para el ancho, calculamos el factor de reducción como .
2. Factor de reducción mas pequeño:
	Utilizamos la función Math.min para encontrar el factor de reducción mas pequeño entre los tres, Esto asegura que todas las dimensiones se reducirán de manera proporcional y ninguna excederá los límites permitidos.

3. Nuevas dimensiones: 
    • Multiplicamos cada dimensión original por el factor de reducción mas pequeño para obtener las nuevas dimensiones ajustadas.
    • Nuevas dimensiones:
nuevoAlto= altoOriginal * factorReduccion
nuevoLargo = largoOriginal * factorReduccion
nuevoAncho=anchoOriginal * factorReduccion



Caso 3 wifiPassword

ahora que Hildebrando se dirige a la ciudad de Medellín, llega a las 2 am, y debe abordar a las 3 am para Macondo, se encuentra con el problema de que el wifi del aeropuerto está fallando, y necesita asegurar su reserva en el hotel para el siguiente día, caminando por el aeropuerto encuentra wifi, la red se llama " ElPassEs: 01110010_01101001_01110111_01101001", pero la contraseña está cifrada en números binarios, además cobran 50.000 la hora.
Tienen que crear un código que convierta los números binarios, a decimales y luego a caracteres 

Caso 4 vocalTranslate

al llegar a Macondo, se da cuenta que todos hablan diferente, solo hablan con la la vocal i así que todo lo que dirá es con la vocal “i”pedir el taxi. Convertir: "Taxi me puede llevar al hotel mariposas amarillas"

Caso 5 taxiGame


cuando llega al hotel, el taxi, le pide que le 300.000 pesos, y el queda sorprendido, asi que empieza a negociar con él, y le dice que, si le gana papel piedra o tijera, le pagara los 300.000, pero si el taxista pierde, no le cobra nada. Solo será una ronda. Si hay empata, no pasa nada.

si el taxista gana, se descontará del dinero disponible

Caso 6 dressPattern

llega al hotel y nota que para las actividades dentro del hotel llevan un patrón de vestimenta para cada cosa, se quedara 4 días

- amarillo yellowPattern
 	- ir a la piscina, el agua huele raro, pero no le pone importancia
		-si se mete, empieza a sentirse ahogado, demasiado cloro, muere (terminan las vacaciones)
		-si no, no pasa nada

- verde greenPattern
	- caminatas, y agüita para el camino, 
		-si elige ir toda la caminata, ira a una hermosa cascada y se tomara fotos
		-si no, llegará a cierto punto, y se devolverá solo, y de (noche se pierde)
- roja redPattern
	- actividades en la playa
		- voleibol, juega y la pasa genial
		- nada en el mar, y monta moto
		- se pone a tomar cocteles mientras descansa, de pronto siente un fuerte dolor de cabeza y empieza a perder la visión, chirrinchi adulterado, se tiene que devolver de emergencia. (terminan las vacaciones)

- azul bluePattern
	- actividades dentro del hotel
		- bingo, se lo gana y aumenta su dinero
		- bailar, y la pasa muy bien
		- casino y apuesta, y solo se queda con pasaje de regreso (terminan las vacaciones)

Preguntar mientras siga vivo, deben crear condicionales anidadas, pregunta por cada día que va estar.


Resultado final: 
cuanto día estuvo en Macondo Hildebrando? 
sí pudo regresar o murió? 
cuánto dinero gasto?	
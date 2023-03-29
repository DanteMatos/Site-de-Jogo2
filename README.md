![logofoda](https://user-images.githubusercontent.com/127865701/228646963-95a7e5ec-f7da-4dac-884a-0585eabbd7ca.jpg)

# Site-de-Jogo2
Site do jogo Outer Wilds com função click e troca de imagem.

HTML
Explicando como fiz o site, primeiramente, montei a estrutura básica do HTML, colocando descripton, viewport pro monitor, meta charset para uso de caracteres especiais, coloquei o ícone e por fim linkei o css para finalizar a estrutura do HEAD.
Indo para o BODY, além da colocação do nome do jogo em letra grande centralizada, eu uma div id da imagem que seria a que mudaria mais pra frente, adicionei duas descrições ao jogo, e após essa adição eu linkei o JS ao nosso HTML, assim finalizando o BODY do HTML.

CSS
A primeira coisa que fiz quando comecei o CSS, foi colocar uma cor no fundo que seria um roxo claro, porém percebi que era inútil, pois decidir colocar uma foto do jogo. Após essa minha escolha eu usei, background-image para colocar a foto na qual está no fundo da página, depois disso mudei a fonte do site para Verdana, mudando também sua cor, colocando um dourado meio escuro. E depois finalizei centralizando a imagem.

JS
Quando iniciei minha progamação no JS, já chamei a ID que tinha criado no HTML para a imagem que seria modificada dando document.getElementByld na mesma ID. Após dar essa código, eu adicionei a função click a imagem.
Depois, eu fiz uma nova var com nome fotos, para fazer a modificação de troca de imagem usando a função (Math.round(Math.Random ()*10))+1;
Logo após isso, só bastava linkar a pasta de imagens a esse código para quando a pessoa clicasse na imagem ela pudesse mudar.
Foi assim que fiz o Site de Outer Wilds com função click.

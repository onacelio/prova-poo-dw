class Produtos {
    constructor() {
        this.produtos = [{
            nome: 'Arroz',
            preco: 4.50,
            imagem: 'arroz',
            categoria: 'ALIMENTO'
        }, {
            nome: 'Feijão', 
            preco: 5.00,
            imagem: 'feijao',
            categoria: 'ALIMENTO'
        }, {
            nome: 'Monster',
            preco: 10.00,
            imagem: 'monster',
            categoria: 'BEBIDA'
        }, {
            nome: 'Carne', 
            preco: 12.00,
            imagem: 'carne',
            categoria: 'ALIMENTO GORDUROSO'
        }, {
            nome: 'Manga',
            preco: 3.00,
            imagem: 'manga',
            categoria: 'FRUTA'
        }, {
            nome: 'Doritos',
            preco: 6.00, 
            imagem: 'doritos',
            categoria: 'SALGADINHO'
        }, {
            nome: 'Skol', 
            preco: 5.00, 
            imagem: 'skol', 
            categoria: 'ALCOOL'
        }, {
            nome: 'Miojo',
            preco: 3.00,
            imagem: 'miojo',
            categoria: 'ALIMENTO NADA SAUDÁVEL'
        }, {
            nome: 'Danone', 
            preco: 6.00,
            imagem: 'danone',
            categoria: 'FRIOS'
        }, {
            nome: 'Cajuína', 
            preco: 5.00,
            imagem: 'cajuina',
            categoria: 'BEBIDA'
        }, {
            nome: 'Bolacha',
            preco: 4.00,
            imagem: 'bolacha',
            categoria: 'BISCOITOS'
        }, {
            nome: 'gabinete',
            preco: 499.90,
            imagem: 'gabinete',
            categoria: 'GABINETE'
        }]
    }
    
    listarProdutos() {
        let section = document.querySelector('.items-loja')
        
        for(let i = 0; i < this.produtos.length; i++) {
            //VARIÁVEIS
            let div = document.createElement('div')
            let divDetalhes = document.createElement('div')
            let imagem = document.createElement('img')
            let span = document.createElement('span')
            let spanPreco = document.createElement('span')
            let button = document.createElement('button')

            // DANDO ATRIBUTOS E VALORES AOS ELEMENTOS
            div.setAttribute("class", "item-loja primer")
            span.setAttribute('class', 'item-titulo')
            imagem.setAttribute('class', "item-imagem")
            divDetalhes.setAttribute('class', "item-detalhes")
            spanPreco.setAttribute("class", 'item-preco')
            button.addEventListener('click', this.addBotaoPressionado)
            button.setAttribute("class", "btn btn-primary item-button")
            button.innerText = 'ADICIONAR AO CARRINHO'
            span.innerText = this.produtos[i].nome
            imagem.src = `imagens/produtos/${this.produtos[i].imagem}.jpg`
            spanPreco.innerText = 'R$: ' + this.produtos[i].preco

            // COLOCANDO NO HTML
            section.appendChild(div)
            div.appendChild(span)
            div.appendChild(imagem)
            div.appendChild(divDetalhes)
            divDetalhes.appendChild(spanPreco)
            divDetalhes.appendChild(button)
        }
    }

    carrinho() {
        let section = document.querySelector('.carrinho')
        let spanItem = document.createElement('span')
        let spanPreco = document.createElement('span')
        let spanQuantidade = document.createElement('span')
        let carrinhoLinha = document.createElement('div')
        let carrinhoItems = document.createElement('div')
        let carrinhoTotal = document.createElement('div')
        let button = document.createElement('button')
        let strong = document.createElement('strong')
        let spanValorTotal = document.createElement('span')

        spanItem.innerText = 'ITEM'
        spanPreco.innerText = 'PREÇO'
        spanQuantidade.innerText = 'QUANTIDADE'
        carrinhoLinha.setAttribute('class', 'carrinho-linha')
        spanItem.setAttribute("class", "carrinho-item carrinho-header carrinho-coluna")
        spanPreco.setAttribute("class", "carrinho-preco carrinho-header carrinho-coluna")
        spanQuantidade.setAttribute("class", "carrinho-quantidade carrinho-header carrinho-coluna")
        carrinhoItems.setAttribute("class", "carrinho-items")
        carrinhoTotal.setAttribute("class", "carrinho-total")
        strong.setAttribute("class", "total-titulo")
        strong.innerText = 'TOTAL: '
        spanValorTotal.setAttribute("class", "preco-total")
        spanValorTotal.innerText = "R$: 0"
        button.setAttribute("class", "btn btn-primary button-enviar")
        button.setAttribute('onclick', "produtos.comprar()")
        button.innerText = 'COMPRAR'

        section.appendChild(carrinhoLinha)
        carrinhoLinha.appendChild(spanItem)
        carrinhoLinha.appendChild(spanPreco)
        carrinhoLinha .appendChild(spanQuantidade)
        section.appendChild(carrinhoItems)
        section.appendChild(carrinhoTotal)
        carrinhoTotal.appendChild(strong)
        carrinhoTotal.appendChild(spanValorTotal)
        section.appendChild(button)
    }

    addBotaoPressionado(event) {
        let button = event.target
        let lojaItem = button.parentElement.parentElement
        let titulo = lojaItem.querySelector('.item-titulo').innerText
        let preco = lojaItem.querySelector('.item-preco').innerText
        let src = lojaItem.querySelector('.item-imagem').src

        produtos.levarCarrinho(titulo, preco, src)
        produtos.atualizarTotal()
    }

    levarCarrinho(titulo, preco, src) {
        let carrinhoLinha = document.createElement('div')
        carrinhoLinha.setAttribute("class", "carrinho-linha primer")
        let carrinhoItems = document.getElementsByClassName('carrinho-items')[0]
        let carrinhoItemNome = carrinhoItems.getElementsByClassName('carrinho-titulo')
        for(let i = 0; i < carrinhoItemNome.length; i++) {
            if(carrinhoItemNome[i].innerText == titulo) {
                alert('ESSE ITEM JÁ ESTÁ NO CARRINHO, APENAS AUMENTE SUA QUANTIDADE!')
                return 
            } 
        }
        
        let carrinhoConteudoLinha = `
            <div class="carrinho-item carrinho-coluna">
                <img class="carrinho-imagem" src="${src}" width="100" height="100">
                <span class="carrinho-titulo">${titulo}</span>
            </div>
            <span class="carrinho-preco carrinho-coluna">${preco}</span>
            <div class="carrinho-quantidade carrinho-coluna">
                <p class="quantidade">1</p>
                
                <button class="btn mais" type="button">+</button>
                <button class="btn menos" type="button">-</button>
                <button class="btn btn-danger" type="button">REMOVER</button>
            </div>`

        carrinhoLinha.innerHTML = carrinhoConteudoLinha
        carrinhoItems.appendChild(carrinhoLinha)
        for(let i = 0; i < carrinhoItemNome.length; i++) {
            let buttonMais = document.getElementsByClassName("mais")[i]
            let buttonMenos = document.getElementsByClassName('menos')[i]

            buttonMais.setAttribute('onclick', `produtos.aumentar(${i})`)
            buttonMenos.setAttribute('onclick', `produtos.diminuir(${i})`)
        }

        let button = document.querySelectorAll('.btn-danger')
        for(let i = 0; i < button.length; i++) {
            button[i].addEventListener('click', this.removerItem)
        }
    }

    aumentar(id) {
        let quantidade = document.getElementsByClassName('quantidade')[id]

        let carrinhoItemNome = Number(quantidade.innerText)
        carrinhoItemNome++
        quantidade.innerHTML = carrinhoItemNome
        this.atualizarTotal()
    }

    diminuir(id) {
        console.log('oiii')
        let quantidade = document.getElementsByClassName('quantidade')[id]
        let carrinhoItemNome = Number(quantidade.innerText)

        if(carrinhoItemNome - 1 > 0) {
            carrinhoItemNome--
            quantidade.innerHTML = carrinhoItemNome
            this.atualizarTotal()
        } else if(carrinhoItemNome - 1 <= 0){
            quantidade.innerHTML = 1
            alert('VOCÊ NÃO PODE COMPRAR 0 PRODUTOS!')
        }
        console.log(carrinhoItemNome)
    }

    atualizarTotal() {
        let carrinhoItemContainer = document.getElementsByClassName('carrinho-items')[0]
        let carrinhoLinhas = document.getElementsByClassName('carrinho-linha')
        var total = 0

        for(let i = 0; i < carrinhoLinhas.length; i++) {
            let carrinhoLinha = carrinhoLinhas[i + 1]
            console.log('Carrinho linha: ', carrinhoLinha)  
            let precoElemento = carrinhoLinha.getElementsByClassName('carrinho-preco')[0]
            console.log('Preço elemento: ', precoElemento)
            let quantidadeElemento = carrinhoLinha.getElementsByClassName('quantidade')[0]
            console.log('Quantidade elemento: ', quantidadeElemento)
            let preco = parseFloat(precoElemento.innerText.replace('R$: ', ''))
            console.log('Preço: ', preco)
            let quantidade = Number(quantidadeElemento.innerText)
            console.log('Quantidade: ', quantidade)

            total = total + (preco * quantidade)
            document.querySelector('.preco-total').innerText = 'R$: ' + total
        }
        total = Math.round(total * 100) / 100
    }

    removerItem(event) {
        console.log('oii')
        let carrinhoLinhas = document.getElementsByClassName('carrinho-linha')
        let buttonClicado = event.target
        buttonClicado.parentElement.parentElement.remove()
        if(carrinhoLinhas.length == 1) {
            document.querySelector('.preco-total').innerText = 'R$: ' + 0
        }
        produtos.atualizarTotal()
    }

    comprar() {
        let carrinhoLinhas = document.getElementsByClassName('carrinho-linha')
        let carrinhoTitulo = document.getElementsByClassName('carrinho-titulo')
        let total = document.querySelector('.preco-total').innerText

        if(carrinhoLinhas.length == 1) {
            alert('VOCÊ DEVE COLOCAR ITENS NO CARRINHO!')
        } else {
            for(let i = 0; i < carrinhoTitulo.length; i++) {
                
                if(carrinhoTitulo[i].innerText == 'SKOL') {
                    console.log('Isso é skol: ', carrinhoTitulo[i].innerText)
                    alert('A venda de bebidas alcoolicas é proibida nas escolas!')
                    if(carrinhoLinhas.length == 2) {
                        console.log('Entrou')
                        document.querySelector('.preco-total').innerText = 'R$: 0'
                    }
                    carrinhoLinhas[i + 1].remove()
                    this.atualizarTotal()
                } 
            }
            if(carrinhoLinhas.length > 1) {
                console.log('POrque não achama caralho')
            alert(`COMPRA EFETUADA COM SUCESSO! 
            O VALOR TOTAL DA COMPRA É DE: ${total}`)
            window.location.reload()
            }
        }
        
    }
}

let produtos = new Produtos()
# 🐾 Landing Page - Clínica Veterinária Kikão

Landing page profissional e responsiva desenvolvida para a **Clínica Veterinária Kikão**, incluindo pet shop e hotelzinho.

## 📋 Sobre o Projeto

Este projeto é uma landing page completa com design moderno e responsivo, criada para atrair clientes e facilitar o agendamento de consultas através do WhatsApp.

### ✨ Funcionalidades

- **Design Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Botão Flutuante do WhatsApp**: Aparece após o usuário rolar a página
- **Menu Hambúrguer**: Menu mobile intuitivo e funcional
- **Animações Suaves**: Efeitos de entrada nos cards e transições elegantes
- **Scroll Suave**: Navegação suave entre as seções
- **SEO Otimizado**: Meta tags e estrutura semântica HTML5

### 🎨 Seções da Página

1. **Header**: Logo e menu de navegação fixo
2. **Hero**: Seção principal com chamada para ação
3. **Serviços**: Grid com todos os serviços oferecidos
4. **Sobre Nós**: Apresentação da clínica
5. **Depoimentos**: Feedback de clientes (placeholder)
6. **Contato**: Informações de contato e mapa
7. **Footer**: Links rápidos e informações adicionais

## 📁 Estrutura de Arquivos

```
kikao-landing-page/
│
├── index.html          # Arquivo HTML principal
├── style.css           # Estilos CSS
├── script.js           # JavaScript para interatividade
├── README.md           # Este arquivo
│
└── images/             # Pasta de imagens
    ├── logo-kikao.png  # Logo da clínica (fundo branco)
    └── logo-kikao.jpg  # Logo da clínica (fundo preto)
```

## 🚀 Como Usar

### 1. Abrir Localmente

Basta abrir o arquivo `index.html` em qualquer navegador moderno (Chrome, Firefox, Safari, Edge).

### 2. Hospedar Online

Você pode hospedar este site em diversos serviços gratuitos ou pagos:

#### Opções Gratuitas:
- **Netlify**: Arraste a pasta do projeto para netlify.com/drop
- **Vercel**: Conecte com GitHub ou faça upload direto
- **GitHub Pages**: Faça push para um repositório e ative o GitHub Pages

#### Opções Tradicionais:
- **Hostinger, Hostgator, etc.**: Use FTP (FileZilla) para enviar os arquivos

### 3. Configurar Domínio

Após escolher a hospedagem, registre um domínio (ex: `www.kikao.com.br`) e aponte-o para o servidor.

## ⚙️ Personalizações Necessárias

Antes de publicar, complete as seguintes informações:

### 📍 Endereço Completo
No arquivo `index.html`, procure por:
```html
<em>(Cidade/UF e CEP a confirmar)</em>
```
E substitua pela cidade, UF e CEP corretos.

### 🗺️ Mapa do Google

1. Acesse [Google Maps](https://www.google.com/maps)
2. Busque pelo endereço completo da clínica
3. Clique em "Compartilhar" > "Incorporar um mapa"
4. Copie o código iframe
5. No arquivo `index.html`, substitua o placeholder do mapa:

```html
<!-- Substituir esta div: -->
<div class="map-placeholder">
    <p>📍 Mapa será adicionado após confirmação do endereço completo</p>
</div>

<!-- Por este iframe: -->
<iframe src="SEU_LINK_DO_GOOGLE_MAPS" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
```

### 👥 Informações da Equipe

No arquivo `index.html`, adicione uma seção com os veterinários:

```html
<!-- Adicionar após a seção "Sobre Nós" -->
<section class="team">
    <div class="container">
        <h2 class="section-title">Nossa Equipe</h2>
        <div class="team-grid">
            <div class="team-member">
                <img src="images/vet1.jpg" alt="Dr. Nome">
                <h3>Dr. Nome Completo</h3>
                <p>CRMV: 12345</p>
                <p>Especialidade: Clínica Geral</p>
            </div>
            <!-- Repetir para cada membro -->
        </div>
    </div>
</section>
```

### 💬 Depoimentos Reais

Substitua os depoimentos placeholder por depoimentos reais de clientes no arquivo `index.html`.

### 📸 Fotos da Clínica

Adicione fotos reais da clínica na pasta `images/` e atualize as referências no HTML.

## 🎨 Cores da Marca

As cores da Kikão já estão configuradas no CSS:

- **Rosa Principal**: `#B8587D`
- **Rosa Escuro**: `#B4264A`
- **Rosa Claro**: `#f5d5e0`

Para alterar, edite as variáveis CSS no início do arquivo `style.css`:

```css
:root {
    --cor-primaria: #B8587D;
    --cor-secundaria: #B4264A;
    --cor-rosa-claro: #f5d5e0;
}
```

## 📱 WhatsApp

O número do WhatsApp já está configurado como **(38) 99757-2024**.

Para alterar, busque por `5538997572024` nos arquivos `index.html` e substitua pelo novo número (sempre no formato internacional sem espaços ou caracteres especiais).

## 🔧 Tecnologias Utilizadas

- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna com Flexbox e Grid
- **JavaScript**: Interatividade e animações
- **Google Fonts**: Fonte Poppins

## 📄 Licença

Este projeto foi desenvolvido exclusivamente para a Clínica Veterinária Kikão.

---

<p align="center">
  Desenvolvido com 💛 por <strong>@mayasrl</strong>
</p>


# 🚀 Rick and Morty Characters App

Um projeto desenvolvido para aprimorar conhecimentos em **arquitetura limpa e componentizada**, utilizando **Next.js 15**, **shadcn/ui**, **TypeScript** e **React Query** para consumir a API pública do Rick and Morty.

![Next.js](https://img.shields.io/badge/Next.js-15+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![React Query](https://img.shields.io/badge/React_Query-5+-red?style=for-the-badge&logo=react-query)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-purple?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

## 🌐 **Live Demo**
**Acesse a aplicação:** [https://rm-characters.vercel.app](https://rm-characters.vercel.app)

---

## 🎯 **Objetivo do Projeto**

Este projeto foi criado como um **laboratório de aprendizado** para **praticar e aprofundar conhecimentos** em arquitetura front-end moderna, focando em:

### **🔧 Stack Tecnológica Moderna**
- **Next.js 15**: Framework React com App Router e Server Components
- **TypeScript**: Tipagem estática robusta em todo o projeto
- **React Query (TanStack Query)**: Gerenciamento inteligente de estado servidor
- **shadcn/ui**: Sistema de design components baseado em Radix UI
- **Tailwind CSS**: Styling utilitário para interfaces responsivas
---

## ✨ **Funcionalidades Implementadas**

🎯 **Interface de Usuário**
- ✅ **Listagem dinâmica** de personagens do Rick and Morty
- ✅ **Cards responsivos** com design system consistente em dark mode
- ✅ **Layout grid adaptativo** para diferentes tamanhos de tela
- ✅ **Componentes reutilizáveis** seguindo princípios DRY

🔄 **Gerenciamento de Estado**
- ✅ **Cache inteligente** e invalidação automática com React Query
- ✅ **Estados de loading, error e success** tratados de forma elegante
- ✅ **Otimização de performance** com lazy loading de dados
- ✅ **Refetch automático** em caso de reconexão

🎨 **Design & UX**
- ✅ **Sistema de cores dinâmico** baseado no status dos personagens
- ✅ **Animações sutis** e transições suaves
- ✅ **Feedback visual** em tempo real para ações do usuário
- ✅ **Acessibilidade** seguindo padrões WCAG

🔒 **Qualidade de Código**
- ✅ **Tipagem completa** com TypeScript em 100% do código
- ✅ **Componentes puros** e funcionais
- ✅ **Hooks personalizados** para lógica reutilizável
- ✅ **Error boundaries** para tratamento de erros

---

## 📁 **Arquitetura do Projeto**

```
src/
├── app/
│   ├── page.tsx              # Página principal (App Router)
│   ├── layout.tsx            # Layout global da aplicação
│   └── globals.css           # Estilos globais e variáveis CSS
├── components/
│   ├── ui/                   # Componentes shadcn/ui base
│   │   ├── card.tsx          # Componente Card primitivo
│   │   ├── button.tsx        # Componente Button reutilizável
│   │   └── skeleton.tsx      # Componente Skeleton para loading
│   ├── features/             # Componentes específicos de funcionalidade
│   │   └── CharacterCard.tsx # Card customizado para personagens
│   └── layout/               # Componentes de layout
│       └── Header.tsx        # Cabeçalho da aplicação
├── hooks/
│   ├── useCharacters.ts      # Hook personalizado para dados de personagens
│   └── useDebounce.ts        # Hook para debounce de inputs
├── services/
│   ├── api.ts                # Configuração e instância do Axios
│   └── characters.ts         # Serviços relacionados a personagens
├── types/
│   ├── character.ts          # Types e interfaces dos personagens
│   └── api.ts                # Types das respostas da API
└── utils/
    ├── cn.ts                 # Utility para concatenação de classes
    └── constants.ts          # Constantes da aplicação
```

---

## 🚀 **Como Executar o Projeto**

### **📋 Pré-requisitos**
- **Node.js 18+** instalado
- **pnpm** instalado globalmente

```bash
# Instalar pnpm globalmente (se não tiver)
npm install -g pnpm
```

### **⚙️ Instalação e Execução**

```bash
# Clone o repositório
git clone https://github.com/me-lucas-al/rick-and-morty-characters.git

# Entre no diretório
cd rick-and-morty-characters

# Instale as dependências com pnpm
pnpm install

# Execute em modo desenvolvimento
pnpm dev
```

🌐 **Acesse:** [http://localhost:3000](http://localhost:3000) no seu navegador.

⭐ **Gostou do projeto? Deixe uma estrela no repositório!**

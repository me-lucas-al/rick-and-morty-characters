# 🚀 Rick and Morty Characters App

Um projeto desenvolvido para aprimorar conhecimentos em **Next.js**, **shadcn/ui**, **TypeScript** e **React Query**, consumindo a API pública do Rick and Morty.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-blue?style=for-the-badge&logo=typescript)
![React Query](https://img.shields.io/badge/React_Query-5+-red?style=for-the-badge&logo=react-query)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-purple?style=for-the-badge)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)

## 🌐 **Live Demo**
**Acesse a aplicação:** [https://rick-and-morty-personagens.vercel.app](https://rick-and-morty-personagens.vercel.app)

---

## 🎯 **Objetivo do Projeto**

Este projeto foi criado com o objetivo de **praticar e aprofundar conhecimentos** nas seguintes tecnologias:

- **Next.js 14+**: Framework React com App Router
- **TypeScript**: Tipagem estática para JavaScript
- **React Query (TanStack Query)**: Gerenciamento de estado servidor
- **shadcn/ui**: Sistema de componentes baseado em Radix UI
- **Tailwind CSS**: Framework de CSS utilitário

---

## 📋 **Funcionalidades**

✅ **Listagem de personagens** do Rick and Morty  
✅ **Cards responsivos** com design dark mode  
✅ **Informações detalhadas** de cada personagem  
✅ **Estados de loading** e tratamento de erros  
✅ **Cache inteligente** com React Query  
✅ **Tipagem completa** com TypeScript  
✅ **Componentes reutilizáveis** com shadcn/ui  

---

## 🛠️ **Tecnologias Utilizadas**

### **Core**
- **Next.js 14+** - Framework React com App Router
- **React 18+** - Biblioteca para interfaces de usuário
- **TypeScript** - Superset do JavaScript com tipagem estática

### **Gerenciamento de Estado**
- **@tanstack/react-query** - Gerenciamento de estado servidor
- **Axios** - Cliente HTTP para API requests

### **UI/Styling**
- **shadcn/ui** - Componentes pré-construídos
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Ícones (se utilizado)

### **API**
- **Rick and Morty API** - API pública RESTful

---

## 📁 **Estrutura do Projeto**

```
src/
├── app/
│   ├── page.tsx              # Página principal (App Router)
│   └── layout.tsx            # Layout global
├── components/
│   ├── ui/                   # Componentes shadcn/ui
│   │   └── card.tsx          # Componente Card
│   └── Card.tsx              # Componente CardDemo customizado
├── api/
│   └── api.ts                # Configuração do Axios
└── types/                    # Definições TypeScript (opcional)
```

---

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js 18+ instalado
- npm, yarn ou pnpm

### **Instalação**
```bash
# Clone o repositório
git clone https://github.com/me-lucas-al/rick-and-morty-characters.git

# Entre no diretório
cd rick-morty-app

# Instale as dependências
npm install
# ou
yarn install
# ou
pnpm install
```

### **Executar em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

---

## 🧠 **Conceitos Aprendidos**

### **Next.js**
- ✅ **App Router** - Nova estrutura de roteamento
- ✅ **"use client"** - Client Components
- ✅ **Server vs Client Components**
- ✅ **File-based routing**

### **React Query**
- ✅ **useQuery** - Buscar e cachear dados
- ✅ **Query Keys** - Identificação única de queries
- ✅ **Loading states** - Estados de carregamento
- ✅ **Error handling** - Tratamento de erros
- ✅ **Automatic refetch** - Revalidação automática

### **TypeScript**
- ✅ **Interface definitions** - Definição de tipos
- ✅ **Props typing** - Tipagem de propriedades
- ✅ **API response typing** - Tipagem de respostas
- ✅ **Generic types** - Tipos genéricos
- ✅ **Type safety** - Segurança de tipos

### **shadcn/ui**
- ✅ **Component composition** - Composição de componentes
- ✅ **Customization** - Personalização de estilos
- ✅ **Accessibility** - Componentes acessíveis
- ✅ **Design system** - Sistema de design consistente

---

## 🎨 **Componentes Principais**

### **CardDemo Component**
```typescript
interface CardDemoProps {
  characters: Character[];
}

export function CardDemo({ characters }: CardDemoProps) {
  // Renderiza uma grid de cards com os personagens
  // Inclui: imagem, nome, status, espécie, gênero, localização, origem
}
```

### **Character Interface**
```typescript
interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: Origin;
  location: Location;
  image: string;
  created: string;
}
```

---

## 🌟 **Destaques de Implementação**

### **React Query Setup**
```typescript
const { data, error, isLoading } = useQuery({
  queryKey: ["characters"],
  queryFn: fetchCharacters,
});
```

### **Conditional Rendering**
```typescript
{character.type && (
  <div>
    <span>Type:</span>
    <span>{character.type}</span>
  </div>
)}
```

### **Dynamic Styling**
```typescript
const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'alive': return 'text-emerald-400';
    case 'dead': return 'text-red-400';
    default: return 'text-gray-400';
  }
};
```

### **Responsive Grid**
```typescript
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {/* Cards */}
</div>
```

---

## 📚 **Recursos de Aprendizado**

### **Documentações Oficiais**
- [Next.js Documentation](https://nextjs.org/docs)
- [React Query Documentation](https://tanstack.com/query/latest)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

### **API Utilizada**
- [Rick and Morty API](https://rickandmortyapi.com/documentation)


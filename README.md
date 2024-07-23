# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Sobre nós

```text
Sobre Nós: Realizando Sonhos Há Mais de 10 Anos

Somos uma equipe apaixonada pelo mundo dos eventos, e nossa jornada começou há mais de uma década. Durante esses anos, tivemos a honra de fazer parte de momentos especiais na vida de nossos clientes, transformando sonhos em realidade.

O que nos diferencia? Nossa paixão, comprometimento e expertise. Nossa equipe é formada por profissionais altamente qualificados, cada um trazendo sua criatividade, habilidades e dedicação para cada projeto que abraçamos. Do planejamento minucioso à execução impecável, estamos sempre focados em superar expectativas.

Mas o que realmente nos move são os sorrisos, as lágrimas de alegria e os abraços apertados que testemunhamos. Cada casamento, festa de aniversário, lançamento de produto ou evento corporativo é uma oportunidade de criar memórias inesquecíveis.

Nossos clientes confiam em nós para cuidar dos detalhes, para tornar seus momentos especiais ainda mais extraordinários. E nós? Nós nos sentimos privilegiados por fazer parte dessas histórias.

Seja um casamento íntimo, um grande show ou uma conferência empresarial, estamos aqui para transformar ideias em experiências memoráveis. Porque, afinal, a vida é feita de momentos, e nós estamos aqui para torná-los inesquecíveis.

Junte-se a nós nessa jornada. Vamos continuar realizando sonhos juntos!

Atenciosamente,

[Seu Nome] Equipe [Nome da Empresa de Eventos]

Espero que esse texto capture a essência da sua empresa e transmita a paixão que vocês têm pelo que fazem. Se precisar de ajustes ou mais informações, estou à disposição! 😊
```

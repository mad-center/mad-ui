export default ({ packageNameCamelCase }: { packageNameCamelCase: string }): string => {
    return `import ${packageNameCamelCase} from "./src/index.vue";

export default ${packageNameCamelCase};
`;
};

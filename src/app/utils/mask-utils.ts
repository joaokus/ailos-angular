export const removeMaskCpf = (value: string) => {
    value = value.replace(new RegExp('\\-', 'g'), '')
    value = value.replace(new RegExp('\\.', 'g'), '')
    value = value.replace(new RegExp('\\s', 'g'), '')
    value = value.trim()

    return value
}

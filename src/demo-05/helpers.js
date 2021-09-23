export const getRandomName = () => {
  const items = ['Amy', 'Bob', 'Charlie', 'Daanesh', 'Ernie', 'Felix', 'George', 'Helen', 'Isabela', 'Joyce']
  return items[Math.floor(Math.random() * items.length)]
}

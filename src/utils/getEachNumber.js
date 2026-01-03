function sum(result) {
  let s = 0;
  for (let i of result) {
    s += Number(i);
  }

  if (!Number.isInteger(s)) throw new Error('[ERROR]합이 정수가 아닙니다.');
  return s;
}

export async function getEachNumber(input) {
  if (input.startsWith('//')) {
    const [delimiterLine, number] = input.split(String.raw`\n`);
    const delimiter = delimiterLine.replace('//', '');
    const customResult = number.split(delimiter);
    if (customResult.every(value => Number.isInteger(value))) throw new Error('[ERROR]숫자가 정수가 아닙니다.');
    if (!customResult.every(value => Number(value) > 0)) throw new Error('[ERROR]숫자가 양수가 아닙니다.');

    return sum(customResult);
  }

  const result = input.split(/[,:]/);
  if (result.every(value => Number.isInteger(value))) throw new Error('[ERROR]숫자가 정수가 아닙니다.');
  if (!result.every(value => Number(value) > 0)) throw new Error('[ERROR]숫자가 양수가 아닙니다.');
  return sum(result);
}
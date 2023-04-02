export function prompt_generator1(input) {
  let prompt;
  switch (input) {
    case 'greeting':
      prompt = 'Please provide a new greeting prompt.';
      break;
    case 'action':
      prompt = 'Please provide an new action prompt.';
      break;
    default:
      prompt = 'I want you to become my new Prompt Creator.';
      break;
  }
  return prompt;
}

export function prompt_generator1(input) {
  let prompt;
  switch (input) {
    case 'greeting':
      prompt = 'Please provide a greeting prompt.';
      break;
    case 'action':
      prompt = 'Please provide an action prompt.';
      break;
    default:
      prompt = 'I want you to become my Prompt Creator.';
      break;
  }
  return prompt;
}

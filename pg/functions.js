export function prompt_generator1(input) {
  let prompt;
  switch (input) {
    case 'greeting':
      prompt = 'Please provide a new greeting prompt.';
      return prompt;
    case 'action':
      prompt = 'Please provide an new action prompt.';
      return prompt;
    default:
      prompt = 'I want you to become my new Prompt Creator.';
      return prompt;
  }
  
}

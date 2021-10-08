  import { FormControl } from "@angular/forms";

  // function returns an object
  // if control value is true returns the key or 'restrictedWords' which is usually the same as the function name
  export function restrictedWords(words) {
    return (control: FormControl): { [key: string]: any } => {
      if (!words) return null;
      var invalidWords = words
        .map((w) => (control.value.includes(w) ? w : null))
        .filter((w) => w != null);
      return invalidWords && invalidWords.length > 0
        ? {'restrictedWords': invalidWords.join(', ')}
        : null
    };
  }

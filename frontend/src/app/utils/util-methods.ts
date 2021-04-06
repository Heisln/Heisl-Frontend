export const cutTimeFromDate = (date: string): string => (date) ? date.split('T')[0] : '';

export const firstLetterToUpper = (s: string): string => (s && s.length > 0) ? s.charAt(0).toUpperCase() + s.substring(1) : '';

export const compareObjectsByAttribute = <T>(obj1: T, obj2: T, attr: keyof T, reverse: boolean = false) => {
  const attr1 = obj1[attr];
  const attr2 = obj2[attr];

  // Add more cases if needed
  let result = 0;
  if (typeof attr1 === 'string' && typeof attr2 === 'string') {
    result = attr1.localeCompare(attr2 as string);
  } else if (attr1 > attr2) {
    // If no special case detected, default to a sensible implementation
    result = 1;
  } else if (attr1 < attr2) {
    result = -1;
  } else {
    result = 0;
  }

  // Check for reverse
  if (reverse) {
    result = -result;
  }
  return result;
};

// eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-call
export const removeDuplicates = ((v, i, self) => i === self.indexOf(v));

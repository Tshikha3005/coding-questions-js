function anagram(s, t) {
  if (s.length !== t.length) return false;
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
  }
  for (let i = 0; i < t.length; i++) {
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }
  console.log(obj1, obj2);
  for (let i in obj1) {
    if (obj1[i] !== obj2[i]) return false;
  }
  return true;
}

anagram("anagram", "nagaram");

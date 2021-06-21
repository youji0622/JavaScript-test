const school = {
  name: "COACHTECH",
  month: 2,
  skills: ["html", "css", "js", "Vue.js", "php", "Laravel"],
  createSentense() {
    let data;
    this.skills.forEach((skill, index) => {
      if (index == 0) {
        data = skill;
      } else {
        data = `${data}と${skill}`;
      }
    });
    return `${this.name}は${this.month}ヶ月で${data}を学ぶことができます`;
  },
};

console.log(school.createSentense());
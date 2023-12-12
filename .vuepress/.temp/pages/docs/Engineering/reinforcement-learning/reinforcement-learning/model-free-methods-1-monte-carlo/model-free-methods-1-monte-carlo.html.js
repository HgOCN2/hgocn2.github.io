export const data = JSON.parse("{\"key\":\"v-2c4238be\",\"path\":\"/docs/Engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/model-free-methods-1-monte-carlo.html\",\"title\":\"无模型方法一：蒙特卡洛\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"无模型（model-free）方法\",\"slug\":\"无模型-model-free-方法\",\"link\":\"#无模型-model-free-方法\",\"children\":[]},{\"level\":2,\"title\":\"从经验中学习\",\"slug\":\"从经验中学习\",\"link\":\"#从经验中学习\",\"children\":[]},{\"level\":2,\"title\":\"和动态规划的区别\",\"slug\":\"和动态规划的区别\",\"link\":\"#和动态规划的区别\",\"children\":[]},{\"level\":2,\"title\":\"行为策略和目标策略\",\"slug\":\"行为策略和目标策略\",\"link\":\"#行为策略和目标策略\",\"children\":[]},{\"level\":2,\"title\":\"在策略（on-policy）学习\",\"slug\":\"在策略-on-policy-学习\",\"link\":\"#在策略-on-policy-学习\",\"children\":[]},{\"level\":2,\"title\":\"离策略（off-policy）学习\",\"slug\":\"离策略-off-policy-学习\",\"link\":\"#离策略-off-policy-学习\",\"children\":[]},{\"level\":2,\"title\":\"重要性采样\",\"slug\":\"重要性采样\",\"link\":\"#重要性采样\",\"children\":[]},{\"level\":2,\"title\":\"离策略学习中的重要性采样\",\"slug\":\"离策略学习中的重要性采样\",\"link\":\"#离策略学习中的重要性采样\",\"children\":[]},{\"level\":2,\"title\":\"蒙特卡洛（Monte-Carlo,MC）方法\",\"slug\":\"蒙特卡洛-monte-carlo-mc-方法\",\"link\":\"#蒙特卡洛-monte-carlo-mc-方法\",\"children\":[]},{\"level\":2,\"title\":\"动态规划方法\",\"slug\":\"动态规划方法\",\"link\":\"#动态规划方法\",\"children\":[]},{\"level\":2,\"title\":\"一些表述说明\",\"slug\":\"一些表述说明\",\"link\":\"#一些表述说明\",\"children\":[]},{\"level\":2,\"title\":\"蒙特卡洛策略评价\",\"slug\":\"蒙特卡洛策略评价\",\"link\":\"#蒙特卡洛策略评价\",\"children\":[]},{\"level\":2,\"title\":\"首次拜访（First-visit）MC策略评价\",\"slug\":\"首次拜访-first-visit-mc策略评价\",\"link\":\"#首次拜访-first-visit-mc策略评价\",\"children\":[]},{\"level\":2,\"title\":\"每次拜访（Every-visit）MC策略评价\",\"slug\":\"每次拜访-every-visit-mc策略评价\",\"link\":\"#每次拜访-every-visit-mc策略评价\",\"children\":[]},{\"level\":2,\"title\":\"对Q函数的MC方法\",\"slug\":\"对q函数的mc方法\",\"link\":\"#对q函数的mc方法\",\"children\":[]},{\"level\":2,\"title\":\"离策略MC策略评价\",\"slug\":\"离策略mc策略评价\",\"link\":\"#离策略mc策略评价\",\"children\":[]},{\"level\":2,\"title\":\"MC的特点小结\",\"slug\":\"mc的特点小结\",\"link\":\"#mc的特点小结\",\"children\":[]},{\"level\":2,\"title\":\"为什么需要增量式算法？\",\"slug\":\"为什么需要增量式算法\",\"link\":\"#为什么需要增量式算法\",\"children\":[]},{\"level\":2,\"title\":\"增量式MC更新\",\"slug\":\"增量式mc更新\",\"link\":\"#增量式mc更新\",\"children\":[]},{\"level\":2,\"title\":\"常量步长\",\"slug\":\"常量步长\",\"link\":\"#常量步长\",\"children\":[]},{\"level\":2,\"title\":\"广义策略迭代\",\"slug\":\"广义策略迭代\",\"link\":\"#广义策略迭代\",\"children\":[]},{\"level\":2,\"title\":\"MC中的广义策略迭代\",\"slug\":\"mc中的广义策略迭代\",\"link\":\"#mc中的广义策略迭代\",\"children\":[]},{\"level\":2,\"title\":\"问题一：使用哪个值函数？\",\"slug\":\"问题一-使用哪个值函数\",\"link\":\"#问题一-使用哪个值函数\",\"children\":[]},{\"level\":2,\"title\":\"问题二：贪婪策略提升？\",\"slug\":\"问题二-贪婪策略提升\",\"link\":\"#问题二-贪婪策略提升\",\"children\":[]},{\"level\":2,\"title\":\"ε-贪婪探索\",\"slug\":\"ε-贪婪探索\",\"link\":\"#ε-贪婪探索\",\"children\":[]},{\"level\":2,\"title\":\"ε-贪婪探索提升\",\"slug\":\"ε-贪婪探索提升\",\"link\":\"#ε-贪婪探索提升\",\"children\":[]},{\"level\":2,\"title\":\"MC的策略迭代\",\"slug\":\"mc的策略迭代\",\"link\":\"#mc的策略迭代\",\"children\":[]},{\"level\":2,\"title\":\"增量式策略评价\",\"slug\":\"增量式策略评价\",\"link\":\"#增量式策略评价\",\"children\":[]},{\"level\":2,\"title\":\"无限探索下的极限贪婪（GLIE）\",\"slug\":\"无限探索下的极限贪婪-glie\",\"link\":\"#无限探索下的极限贪婪-glie\",\"children\":[]},{\"level\":2,\"title\":\"GLIE蒙特卡洛优化\",\"slug\":\"glie蒙特卡洛优化\",\"link\":\"#glie蒙特卡洛优化\",\"children\":[]},{\"level\":2,\"title\":\"增量式离策略每次拜访蒙特卡洛评价\",\"slug\":\"增量式离策略每次拜访蒙特卡洛评价\",\"link\":\"#增量式离策略每次拜访蒙特卡洛评价\",\"children\":[]},{\"level\":2,\"title\":\"增量式离策略每次拜访蒙特卡洛优化\",\"slug\":\"增量式离策略每次拜访蒙特卡洛优化\",\"link\":\"#增量式离策略每次拜访蒙特卡洛优化\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"docs/Engineering/reinforcement-learning/reinforcement-learning/model-free-methods-1-monte-carlo/model-free-methods-1-monte-carlo.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

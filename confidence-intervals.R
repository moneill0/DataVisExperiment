
install.packages("boot", dep=TRUE)
library(boot)

nums = read.csv('experiment-fccd0-export.csv', header=TRUE)

fc <- function(d, i){
  d2 <- d[i,]
  return(d2$Accuracy)
}

bootcorr <- boot(nums, fc, R=500)
bootcorr

boot(data = nums, statistic = fc, R = 500)

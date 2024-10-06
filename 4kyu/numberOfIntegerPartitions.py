def partitions(n):
    partitions = [0] * (n + 1)
    partitions[0] = 1  

    for i in range(1, n + 1):
        for j in range(i, n + 1):
            partitions[j] += partitions[j - i]

    return partitions[n]
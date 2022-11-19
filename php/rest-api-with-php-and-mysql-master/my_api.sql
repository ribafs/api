CREATE TABLE `learnhunter` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

--
-- Dumping data for table `learnhunter`
--

INSERT INTO `learnhunter` (`id`, `name`, `email`, `created_at`) VALUES
(1, 'sobuz', 'sobuz@gmail.com', '2019-01-30 08:00:00'),
(2, 'mmr', 'mmr@gmail.com', '2019-01-30 08:00:00');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `learnhunter`
--
ALTER TABLE `learnhunter`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `learnhunter`
--
ALTER TABLE `learnhunter`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;


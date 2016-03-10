import os


def get_filepaths(directory):
    """
    This function will generate the file names in a directory
    tree by walking the tree either top-down or bottom-up. For each
    directory in the tree rooted at directory top (including top itself),
    it yields a 3-tuple (dirpath, dirnames, filenames).
    """
    file_paths = []  # List which will store all of the full filepaths.

    # Walk the tree.
    for root, directories, files in os.walk(directory):
        for filename in files:
            # Join the two strings in order to form the full filepath.
            filepath = os.path.join(root, filename)
            file_paths.append(filepath)  # Add it to the list.

    return file_paths  # Self-explanatory.

# Define what directories should be monitored
paths = ['client', 'public', 'localize']

# Run the above function and store its results in a variable.
target = open('filename.txt', 'w')

for path in paths:
    full_file_paths = get_filepaths(path)

    for file in full_file_paths:
        if '.less' in file:
            target.write("api.addFiles(\'%s\', 'client')\n\t" % file)
        elif '.js' in file:
            target.write("api.addFiles(\'%s\', 'client')\n\t" % file)
        elif '.html' in file:
            target.write("api.addFiles(\'%s\', 'client')\n\t" % file)
        elif '.css' in file:
            target.write("api.addFiles(\'%s\', 'client')\n\t" % file)
        elif '.DS_Store' in file:
            continue
        else:
            target.write("api.addAssets(\'%s\', 'client')\n\t" % file)

target.close()

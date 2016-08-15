initSidebarItems({"enum":[["ArgSettings","Various settings that apply to arguments and may be set, unset, and checked via getter/setter methods [`Arg::set`], [`Arg::unset`], and [`Arg::is_set`] [`Arg::set`]: ./struct.Arg.html#method.set [`Arg::unset`]: ./struct.Arg.html#method.unset [`Arg::is_set`]: ./struct.Arg.html#method.is_set"]],"mod":[["any_arg",""],["settings",""]],"struct":[["Arg","The abstract representation of a command line argument. Used to set all the options and relationships that define a valid argument for the program."],["ArgGroup","`ArgGroup`s are a family of related [arguments] and way for you to express, \"Any of these arguments\". By placing arguments in a logical group, you can create easier requirement and exclusion rules instead of having to list each argument individually, or when you want a rule to apply \"any but not all\" arguments."],["ArgMatches","Used to get information about the arguments that where supplied to the program at runtime by the user. New instances of this struct are obtained by using the [`App::get_matches`] family of methods."],["OsValues","An iterator for getting multiple values out of an argument via the [`ArgMatches::values_of_os`] method. Usage of this iterator allows values which contain invalid UTF-8 code points unlike [`Values`]."],["SubCommand","The abstract representation of a command line subcommand."],["Values","An iterator for getting multiple values out of an argument via the [`ArgMatches::values_of`] method."]]});
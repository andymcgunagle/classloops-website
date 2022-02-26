# Content model for "Blog Post"

## Title - Short text
- Validation
  - Required
  - Unique

## Slug - Short text
- Validation
  - Required
  - Unique
  - Limit character count: Between 1 and 100
    - Custom error message: Slug must be between 1 and 100 characters.
  - Match a specific pattern: ^[a-z0-9]+(?:-[a-z0-9]+)*$
    - Custom error message: Slug must be words with all lowercase letters separated by hyphens.
- Appearance: 
  - Slug
  - Help text: Slug will automatically be generated from Title, but can be edited.
  - Generate slug from: Title

## Author - Short text
- Validation
  - Required
- Default value: (Blog author's name)

## Date Published - Date & time
- Validation
  - Required
- Appearance
  - Format: Date only

## Hero Image - Media
- Validation 
  - Accept only specificied file types: Image

## Content - Rich text
- Settings
  - Remove H1 and H2 options
- Validation 
  - Required

## Tags - Short text, list
- Validation 
  - Required
  - Match a specific pattern: ^[a-z0-9-]*$
    - Custom error message: Tags can only contain lowercase letters, numbers, and hyphens.

